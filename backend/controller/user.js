const User = require('../model/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const cloudinary=require('cloudinary')

const register = async (req,res)=>{
    try{
        const user=new User({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            phonenumber:req.body.phonenumber,
            Age:req.body.Age,
        })
        user.password=await bcrypt.hash(user.password, 10)
        const user1=await user.save()
        const token=jwt.sign({_id:user._id},process.env.TOKEN_KEY,{expiresIn: "24h"})
        res.json({message: "Signup successful",token,user});
    }
    catch(error){
        res.status(500).send(error)
    }
}

const log= async(req,res)=>{
    try{
        const username=req.body.username
        const password=req.body.password

        const user=await User.findOne({username:username})
        if(user){
            const validpassword= await bcrypt.compare(password, user.password)
            if(validpassword){
                const token=jwt.sign({_id:user._id},process.env.TOKEN_KEY,{expiresIn: "24h"})
                res.json({message: "Login successful",token,user});
                
            }else{
                return res.send("Incorrect username or password")
            }
        }
        else{
            return res.status(201).send("User not found")
        }

    }
    catch(error){
        res.status(500).send(error)
    }
}

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

module.exports ={
    register,
    log,uploadprofilepic
}