// @ts-ignore
const mongoose = require('mongoose');
// import config from './../config'

// 连接
mongoose.connect('mongodb://localhost/inline_cv', {
  useNewUrlParser: true
});

// 连接成功
mongoose.connection.on('connected', function() {
  console.log('Mongoose connection success');
});

// 连接异常
mongoose.connection.on('error', (err: string) => {
  console.log('Mongoose connection error: ' + err);
});

// 断开连接
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected');
});