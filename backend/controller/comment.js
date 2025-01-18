const Comment=require('../model/comment')

const addcomment= async(req,res)=>{
    try {
        const {comment,blog}=req.body
        const user=req.user._id
        let newcomment
        if(blog){
            newcomment=new Comment({comment,user,blog})
        }
        else{
            res.send("Please mention the blogid")
        }
        const savecomment= await newcomment.save()
        res.send(savecomment)
    } catch (error) {
        res.status(500).send(error)
    }
}
const getcomments=async(req,res)=>{
    try {
        const comm= await Comment.find().populate('user')
        res.send(comm)
    } catch (error) {
        res.status(500).send("Error while getting comments")
    }
}
const deletecomment=async(req,res)=>{
    try {
        const comm=await Comment.findById(req.body.id)
        const c1=await comm.deleteOne()
        res.send("Comment deleted successfully")
    } catch (error) {
        res.send("Error in comment deletion")
    }
}
const updatecomment=async(req,res)=>{
    try {
        const user=await Comment.findByIdAndUpdate(req.params.id,req.body,)
        res.send("Update done")
    } catch (error) {
        res.status(500).send("Upadation not done")
    }
}
module.exports={ addcomment,getcomments,deletecomment,updatecomment}