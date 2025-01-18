const {register,loginWithOTP,loginWithPassword,uploadprofilepic, verifyOTP,follow,unfollow,getfollower,getFollowingdata, myProfile}= require('../controller/user')
const authenticatetoken=require('../middleware/authenticate')
const upload=require('../middleware/multer')
const express = require('express')
const router = express.Router()

router.post('/signup',register)
router.post('/loginPass',loginWithPassword)
router.post('/loginOTP',loginWithOTP)
router.post('/verify-otp',verifyOTP)
router.post('/uploadpic',authenticatetoken,upload.single('image'),uploadprofilepic)
router.post('/follow/:id',authenticatetoken,follow)
router.post('/unfollow/:id',authenticatetoken,unfollow)
//router.get('/getfollower',authenticatetoken,getfollower)
router.get('/getfollower',authenticatetoken,getFollowingdata)
router.get('/myProfile',authenticatetoken,myProfile)

module.exports = router 