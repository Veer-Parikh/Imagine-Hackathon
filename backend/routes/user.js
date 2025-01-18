const {register,loginWithOTP,loginWithPassword,uploadprofilepic, verifyOTP}= require('../controller/user')
const authenticatetoken=require('../middleware/authenticate')
const upload=require('../middleware/multer')
const express = require('express')
const router = express.Router()

router.post('/signup',register)
router.post('/loginPass',loginWithPassword)
router.post('/loginOTP',loginWithOTP)
router.post('/verify-otp',verifyOTP)
router.post('/uploadpic',authenticatetoken,upload.single('image'),uploadprofilepic)

module.exports = router 