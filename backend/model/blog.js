const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: [String], 
    // required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment', 
    },
  ],
  likedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    default:0
}],
isMilestone:{
    type:Boolean,
    default:false
},
forCF:{
    type:Boolean,
    default:false
},
  Images:{
    type: String
  }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
