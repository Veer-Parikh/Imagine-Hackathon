const {addcomment,getcomments,deletecomment,updatecomment}=require('../controller/comment')
const authenticatetoken=require('../middleware/authenticate')
const express=require('express')
const router=express.Router()

router.post('/comment',authenticatetoken,addcomment)
router.get('/getcomment',authenticatetoken,getcomments)
router.delete('/deletecomment',authenticatetoken,deletecomment)
router.patch('/updatecomment',authenticatetoken,updatecomment)

module.exports=router