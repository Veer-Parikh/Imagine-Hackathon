const User = require('../model/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const cloudinary=require('cloudinary')
const { generateOTP, getOtpExpiration, sendOTP} = require("../middleware/otp");
const register = async (req,res)=>{
    try {
        const { username, password, email, phonenumber, age } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const otp = generateOTP();
        const otpExpiration = getOtpExpiration();

        const user = new User({
            username,
            password: hashedPassword,
            email,
            phonenumber,
            age,
            otp,
            otpExpiration,
        });

        await user.save();
        await sendOTP(phonenumber, otp);

        res.json({ message: 'Signup successful. OTP sent to your phone.', user });
    } catch (error) {
        res.status(500).send(error);
    }
}

const loginWithPassword = async (req, res) => {
    try {
        const { identifier, password } = req.body; // `identifier` can be username or mobile number

        const user = await User.findOne({
            $or: [{ username: identifier }, { phonenumber: identifier }], // Match either username or mobile number
        });

        if (user) {
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                const token = jwt.sign({ _id: user._id }, process.env.TOKEN_KEY, { expiresIn: '24h' });
                res.json({ message: 'Login successful', token, user });
            } else {
                return res.status(401).send('Incorrect username or password');
            }
        } else {
            return res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Route 2: Login with OTP
const loginWithOTP = async (req, res) => {
    try {
        const { phonenumber } = req.body;

        const user = await User.findOne({ phonenumber });
        if (user) {
            const otp = generateOTP();
            const otpExpiration = getOtpExpiration();

            user.otp = otp;
            user.optExpiration = otpExpiration;
            await user.save();

            await sendOTP(phonenumber, otp);
            res.json({ message: 'OTP sent successfully. Please verify the OTP to log in.' });
        } else {
            return res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

const verifyOTP = async (req, res) => {
    try {
        const { phonenumber, otp } = req.body;

        const user = await User.findOne({ phonenumber });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.otp !== otp || new Date() > user.optExpiration) {
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        }

        user.otp = null;
        user.optExpiration = null;
        await user.save();

        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_KEY, { expiresIn: '24h' });
        res.status(200).json({ message: 'OTP verified successfully', token, user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to verify OTP' });
    }
};

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})
const uploadprofilepic= async(req,res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const profilePicUrl = result.secure_url;

        const user = await User.findById(req.user._id);
        user.profilePicUrl = profilePicUrl;
        await user.save();
        return res.send("Profile picture uploaded and saved.");
    } catch (error) {
        return res.status(500).send(error);
    }
}

const follow = async (req, res) => {
    try {
      const { id } = req.params; 
      const { family = false } = req.body; 
      const followUser = await User.findById(id); 
      const followingUser = await User.findById(req.user._id); 
      if (!followUser || !followingUser) {
        return res.status(404).send("User not found.");
      }
      const alreadyFollowing = followingUser.following.find(
        (f) => f.userId?.toString() === id
      );
      if (alreadyFollowing) {
        return res.status(400).send("You are already following this user.");
      }
      followUser.followers.push(req.user._id);
      followingUser.following.push({ userId: id, family });
      await followUser.save();
      await followingUser.save();
  
      res.send("Followed successfully.");
    } catch (error) {
      console.error("Error in follow:", error);
      res.status(500).send("An error occurred while following the user.");
    }
  };
  
  const unfollow = async (req, res) => {
    try {
        const followuser = await User.findById(req.params.id);
        const followinguser = await User.findById(req.user._id);

        if (!followuser || !followinguser) {
            return res.status(400).send("Invalid user ID.");
        }

        // Remove the current user from the followuser's followers list
        followuser.followers = followuser.followers.filter(
            (follower) => follower.userId.toString() !== req.user._id.toString()
        );

        // Remove the followuser from the following list of the current user
        followinguser.following = followinguser.following.filter(
            (following) => following.userId.toString() !== req.params.id.toString()
        );

        await followuser.save();
        await followinguser.save();

        res.send("Unfollowed");
    } catch (error) {
        res.status(500).send(error);
    }
};

const getfollower=async(req,res)=>{
    try {
        const user =await User.findById(req.user._id)
        res.send(user.followers)
    } catch (error) {
        res.status(500).send("Error while fetching followers")
    }
}

const getFollowingdata = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
            .populate({
                path: 'following.userId', // Populate the userId field in following
                select: 'username email profilePicUrl blogs followers following', // Select necessary fields
            });

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.json(user.following); // Send the populated following data
    } catch (error) {
        console.error("Error while fetching following users:", error);
        res.status(500).send('Error while fetching following users');
    }
};
async function myProfile(req,res) {
    try{
        const userId = req.user._id;
        const users = await User.findById(
            userId
        )
        res.send(users)
    } catch(error){

    }
}

const searchUser = async (req, res) => {
    const { query } = req.params; // Expecting `query` in the request body
  
    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }
  
    try {
      // Search for a user where username or phone matches the query
      const user = await User.findOne({
        $or: [
          { username: query },
          { phoneNumber: query },
        ],
      });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      return res.status(200).json(user);
    } catch (error) {
      console.error("Error searching for user:", error);
      return res.status(500).json({ message: "An error occurred" });
    }
  };
  
const checkFollow = async (req, res) => {
    try {
      const currentUserId = req.user.userId; // Get the current user's ID from the auth middleware
      const followedId = req.params.followedId; // Get the ID of the user to check from the request parameters
  
      // Find the current user and check if they are following the specified user
      const user = await User.findById(currentUserId);
  
      if (!user) {
        return res.status(404).json({ message: "Current user not found" });
      }
  
      // Check if the followedId exists in the user's following list
      const isFollowing = user.following.some(
        (follow) => follow.userId.toString() === followedId
      );
  
      return res.status(200).json({ isFollowing });
    } catch (error) {
      console.error("Error checking follow status:", error);
      return res
        .status(500)
        .json({ message: "Server error while checking follow status" });
    }
};

module.exports ={
    register,
    loginWithOTP,
    loginWithPassword,
    uploadprofilepic,
    verifyOTP,follow,unfollow,getfollower,getFollowingdata,myProfile,searchUser,checkFollow
}