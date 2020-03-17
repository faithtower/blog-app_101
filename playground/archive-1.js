// Basic Filtering with Query String
exports.getAllPosts = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit'];
    excludedFields.forEach(el => delete queryObj[el]);

    const query = Post.find(queryObj);

    const posts = await query;

    res.status(200).json({
      status: 'success',
      data: {
        posts
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
