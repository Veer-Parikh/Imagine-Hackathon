const mongoose= require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phonenumber:{
        type:String,
        required:true,
        unique:true,
    },
    otp:{
        type:String,
    },
    optExpiration:{
        type:Date,
    },
    Age:{
        type:Number,
        required:true,
    },
    profilePicUrl: {
        type: String 
    },
})

module.exports=mongoose.model('User',userSchema)