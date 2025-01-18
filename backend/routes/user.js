const {register,log,uploadprofilepic}= require('../controller/user')
const authenticatetoken=require('../middleware/authenticate')
const upload=require('../middleware/multer')
const express = require('express')
const router = express.Router()

router.post('/signup',register)
router.post('/login',log)
router.post('/uploadpic',authenticatetoken,upload.single('image'),uploadprofilepic)

module.exports = router 