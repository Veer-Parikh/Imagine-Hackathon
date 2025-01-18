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

        if (user.otp !== otp || new Date() > user.otpExpiration) {
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

const follow=async(req,res)=>{
    try {
        const followuser= await User.findById(req.params.id)
        const followinguser= await User.findById(req.user._id)
        if(!followuser || !followinguser){
            return res.send("Wrong user id")
        }
        followuser.followers.push(req.user._id)
        followinguser.following.push(req.params.id)
        await followuser.save()
        await followinguser.save()
        res.send("Followed")
    } catch (error) {
        res.status(500).send(error)        
    }
}
const unfollow=async(req,res)=>{
    try {
        const followuser= await User.findById(req.params.id)
        const followinguser= await User.findById(req.user._id)
        if(!followuser || !followinguser){
            return res.send("Wrong user id")
        }
        followuser.followers.pull(req.user._id)
        followinguser.following.pull(req.params.id)
        await followuser.save()
        await followinguser.save()
        res.send("Unfollowed")
    } catch (error) {
        res.status(500).send(error)        
    }
}
const getfollower=async(req,res)=>{
    try {
        const user =await User.findById(req.user._id)
        res.send(user.followers)
    } catch (error) {
        res.status(500).send("Error while fetching followers")
    }
}
module.exports ={
    register,
    loginWithOTP,
    loginWithPassword,
    uploadprofilepic,
    verifyOTP,follow,unfollow,getfollower
}