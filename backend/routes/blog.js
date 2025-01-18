const { createBlog, getblogs, getUserBlogs, getBlogById, deleteBlog,fetchBlogComments } = require('../controller/blog');
const authenticatetoken = require('../middleware/authenticate');
const express = require('express');
const upload=require('../middleware/multer')
const router = express.Router();

router.post('/blogs', authenticatetoken,upload.single('image'),createBlog);
router.get('/blogs', authenticatetoken, getblogs);
router.get('/blog/:id', authenticatetoken, getBlogById);
router.get('/user/blogs', authenticatetoken, getUserBlogs);
router.get('/user/blogComments/:id', authenticatetoken, fetchBlogComments);
router.delete('/blog/:id', authenticatetoken, deleteBlog);

module.exports = router;
