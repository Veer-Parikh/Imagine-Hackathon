const {register,log,uploadprofilepic,follow,unfollow,getfollower}= require('../controller/user')
const authenticatetoken=require('../middleware/authenticate')
const upload=require('../middleware/multer')
const express = require('express')
const router = express.Router()

router.post('/signup',register)
router.post('/login',log)
router.post('/uploadpic',authenticatetoken,upload.single('image'),uploadprofilepic)
router.post('/follow/:id',authenticatetoken,follow)
router.post('/unfollow/:id',authenticatetoken,unfollow)
router.get('/getfollower',authenticatetoken,getfollower)

module.exports = router 