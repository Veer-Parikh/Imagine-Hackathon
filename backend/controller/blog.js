const Blog=require('../model/blog')
const cloudinary=require('cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

async function createBlog(req, res) {
    try {
        const { text, tags, title } = req.body;
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
        const blog=await Blog.find()
        res.json(blog)
    } catch (error) {
        res.send("Error")
    }
}

const getBlogById = async (req, res) => {
    try {
        const blogId = req.params.id;
        const blog = await Blog.findById(blogId);

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
module.exports ={
    createBlog,getblogs,getUserBlogs,getBlogById,deleteBlog
}


