const Comment=require('../model/comment')

const addcomment= async(req,res)=>{
    try {
        const {comment}=req.body
        const user=req.user._id
        let newcomment
        if(answer){
            newcomment=new Comment({comment,user,answer})
        }
        else if(question){
            newcomment=new Comment({comment,user,question})
        }
        else{
            res.send("Please mention the answer or question to add comment")
        }
        const savecomment= await newcomment.save()
        res.send({ message: 'Comment posted', savecomment: { _id: savecomment._id } })
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