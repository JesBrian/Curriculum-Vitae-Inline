const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: __dirname + '/../dist',
    filename: '[name].js' // 打包后输出的文件名，[name]就是使用入口文件的key做名称
  },
  plugins: [
    new CleanWebpackPlugin(
      [__dirname + '/../dist'], {
        root: '/',
        verbose: true
      }
    ),
    new HtmlWebpackPlugin({
      title: '在线简历制作',
      template: './web/public/index.html',
      filename: 'index.html',
      hash: true,
      minify: {
        collapseWhitespace: true //折叠空白区域 也就是压缩代码
      },
      chunks: ['index'],
      chunksSortMode: 'manual' // 排序方式
    })
  ]
});