const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    index: './src/main.js'  //webpack的入口文件，指定将哪个文件进行打包
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: ['vue-loader']
    }, {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loaders: ["style-loader", "css-loader"]
    }]
  },
  plugins: [
    // 添加VueLoaderPlugin，以响应vue-loader
    new VueLoaderPlugin()
  ]
};