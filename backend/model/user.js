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
        // required:true,
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
    age:{
        type:Number,
        // required:true,
    },
    profilePicUrl: {
        type: String 
    },
    followers:[{
        type: mongoose.Schema.Types.ObjectId,ref:'User',default:0
    }],
    following:[{
        type: mongoose.Schema.Types.ObjectId,ref:'User',default:0
    }],
})

module.exports=mongoose.model('User',userSchema)