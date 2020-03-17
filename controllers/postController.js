const Post = require('../models/postModel');
const catchAsync = require('../utils/catAsync');

exports.getAllPosts = catchAsync(async (req, res) => {
  const queryObj = { ...req.query };
  const excludedFields = ['page', 'sort', 'limit'];
  excludedFields.forEach(el => delete queryObj[el]);

  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(text|search)\b/g, match => `$${match}`);

  const query = Post.find(JSON.parse(queryStr));

  const posts = await query;

  res.status(200).json({
    status: 'success',
    data: {
      posts
    }
  });
});

exports.getPost = catchAsync(async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      post
    }
  });
});

exports.createPost = catchAsync(async (req, res) => {
  const newPost = await Post.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      post: newPost
    }
  });
});

exports.updatePost = catchAsync(async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  res.status(201).json({
    status: 'success',
    data: {
      post: post
    }
  });
});

exports.deletePost = catchAsync(async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null
  });
});
