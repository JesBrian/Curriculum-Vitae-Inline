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
      title: '在线简历制作系统管理后台',
      template: './cms/src/index.html',
      filename: 'index.html',
      hash: true,
      chunks: ['index'],
      chunksSortMode: 'manual' // 排序方式
    })
  ],
  devtool: 'inline-source-map' // 开启控制台输出错误信息具体在哪行
});