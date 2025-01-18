const Blog=require('../model/blog')
const Comment=require('../model/comment')
const cloudinary=require('cloudinary');
const User = require('../model/user');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

async function createBlog(req, res) {
    try {
        const { text, tags, title ,isMilestone,forCF} = req.body;
        const userId = req.user._id;
        const tagsArray = tags ? tags.split(" ").map(tag => tag.trim()) : [];
        let imageUrl = '';
        if (req.file) {
            const uploadResult = await cloudinary.uploader.upload(req.file.path);
            imageUrl = uploadResult.secure_url; 
        }
        const newBlog = new Blog({
            text,
            title,
            tags: tagsArray,
            userId,
            Images: imageUrl, 
            isMilestone,forCF
        });

        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).send("An error occurred while creating the blog");
    }
}

const getblogs=async(req,res)=>{
    try {
        const blog=await Blog.find({ forCF: false })
        res.json(blog)
    } catch (error) {
        res.send("Error")
    }
}

const getMilestoneCF=async(req,res)=>{
    try {
        const blog=await Blog.find({isMilestone:true})
        res.json(blog)
    } catch (error) {
        res.send("Error")
    }
}

const getMilestoneAll=async(req,res)=>{
    try {
        const blog=await Blog.find({ forCF:false,isMilestone:true})
        res.json(blog)
    } catch (error) {
        res.send("Error")
    }
}

const getFollowingBlogs = async (req, res) => {
    try {
        const userId = req.user._id; // Current user's ID

        // Fetch the current user's following list
        const user = await User.findById(userId).select('following');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Prepare the filter conditions for blogs
        const followingUsers = user.following;

        // Fetch blogs based on the conditions
        const blogPromises = followingUsers.map(following => {
            if (following.family) {
                // Fetch all blogs of this user
                return Blog.find({ userId: following.userId });
            } else {
                // Fetch blogs where forCF is false
                return Blog.find({ userId: following.userId, forCF: false });
            }
        });

        // Wait for all blog queries to resolve
        const blogsArray = await Promise.all(blogPromises);

        // Flatten the array of blog arrays
        const blogs = blogsArray.flat();

        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching blogs from followed users:', error);
        res.status(500).json({ error: 'An error occurred while fetching blogs' });
    }
};

const getFamilyCFBlogs = async (req, res) => {
    try {
        const userId = req.user._id; // Current user's ID

        // Fetch the current user's following list
        const user = await User.findById(userId).select('following');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Filter the list of following users to get only family members
        const familyMembers = user.following
            .filter(following => following.family)
            .map(following => following.userId);

        if (familyMembers.length === 0) {
            return res.status(200).json([]); // No family members, return empty array
        }

        // Fetch blogs from family members marked as forCF
        const cfBlogs = await Blog.find({
            userId: { $in: familyMembers },
            forCF: true
        });

        res.status(200).json(cfBlogs);
    } catch (error) {
        console.error('Error fetching CF blogs from family members:', error);
        res.status(500).json({ error: 'An error occurred while fetching CF blogs' });
    }
};

const getMilestonesWithCFCheck = async (req, res) => {
    try {
        const userId = req.user._id; // Current user's ID

        // Fetch the current user's following list
        const user = await User.findById(userId).select('following');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Separate the following list into family and non-family
        const following = user.following;
        const familyMembers = following
            .filter(following => following.family)
            .map(following => following.userId);

        const nonFamilyMembers = following
            .filter(following => !following.family)
            .map(following => following.userId);

        // Query to fetch milestones:
        // - For family members: all milestones including CF=true
        // - For non-family members: milestones only where CF=false
        const milestones = await Blog.find({
            $or: [
                // Family members: All milestones
                { userId: { $in: familyMembers }, isMilestone: true },
                // Non-family members: Only milestones with CF=false
                { userId: { $in: nonFamilyMembers }, isMilestone: true, forCF: false }
            ]
        });

        res.status(200).json(milestones);
    } catch (error) {
        console.error('Error fetching milestones:', error);
        res.status(500).json({ error: 'An error occurred while fetching milestones' });
    }
};

const getBlogById = async (req, res) => {
    try {
        const blogId = req.params.id;
        const blog = await Blog.findById(blogId).populate('comments');

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.error("Error fetching blog:", error);
        res.status(500).send('An error occurred while fetching the blog');
    }
};

const getUserBlogs = async (req, res) => {
    try {
        const userId = req.user._id; 
        const blogs = await Blog.find({ userId });
        res.status(200).json(blogs);
    } catch (error) {
        console.error("Error fetching user blogs:", error);
        res.status(500).send("An error occurred while fetching user blogs");
    }
};


const deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        await Blog.findByIdAndDelete(blogId);
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error("Error deleting blog:", error);
        res.status(500).send('An error occurred while deleting the blog');
    }
};

const fetchBlogComments = async (req, res) => {
    try {
      const blogId = req.params.id; 
      const blog = await Blog.findById(blogId).populate({
        path: 'comments', 
        populate: {
          path: 'userId', 
          select: 'username email', 
        },
      });
  
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      res.status(200).json(blog.comments); 
    } catch (error) {
      console.error('Error fetching comments:', error);
      res.status(500).json({ error: 'An error occurred while fetching comments' });
    }
  };

  async function getBlogBySearch(req, res) {
    try {
      const searchWord = req.params.searchWord; // Get the search word from request parameters
  
      // Find blogs based on the searchWord
      const blogs = await Blog.find({
        $or: [
          { tags: { $in: [searchWord] } }, // Match blogs where the tags array contains the search word
          { text: { $regex: searchWord, $options: "i" } }, // Match blogs where the text contains the search word (case-insensitive)
          { title: { $regex: searchWord, $options: "i" } }, // Match blogs where the title contains the search word (case-insensitive)
          {
            userId: await User.findOne({
              username: { $regex: searchWord, $options: "i" }, // Match blogs by username (case-insensitive)
            }).select("_id"),
          },
        ],
      })
        .populate("userId", "username") // Populate the user field with the username
        .populate({
          path: "comments",
          populate: { path: "userId", select: "username" }, // Populate comments with user details
        })
        .select(
          "blogId createdAt text title tags likedBy Images comments isMilestone forCF"
        ) // Select specific fields
        .sort({ createdAt: -1 }); // Sort by creation date (newest first)
      return res.status(200).send(blogs); // Send the blogs as response
    } catch (error) {
      return res.status(500).send({ error: "An error occurred while searching blogs." }); // Send error response
    }
  }

async function getMyBlogs(req,res) {
    try{
        const userId = req.user._id;

        const blogs = await Blog.find({
            userId:userId
        })
        res.send(blogs)
    } catch(error){
        res.send(error)
        console.log(error)
    }
}
  
module.exports ={
    createBlog,getblogs,getUserBlogs,getBlogById,deleteBlog,fetchBlogComments,getFollowingBlogs,getFamilyCFBlogs,getMilestonesWithCFCheck,getBlogBySearch,getMyBlogs
}


