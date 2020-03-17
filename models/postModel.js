const mongoose = require('mongoose');

const d = new Date();

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A Post must have a title'],
    trim: true
  },
  body: {
    type: String,
    required: [true, 'A Post must have a content'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'A Post must have an author'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  month: {
    type: Number,
    default: d.getMonth() + 1
  },
  year: {
    type: Number,
    default: d.getFullYear()
  },
  imageCover: {
    type: String,
    required: [true, 'A post must have an image cover']
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
