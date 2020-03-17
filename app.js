const express = require('express');
const morgan = require('morgan');

const postRouter = require('./routes/postRoutes');

const app = express();

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!!');
});

// 3) ROUTES
app.use('/api/v1/posts', postRouter);

module.exports = app;
