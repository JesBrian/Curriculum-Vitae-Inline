const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.js');
module.exports = merge(common, {
  output: {
    path:  "/",//热加载模式不能指定输出的文件地址，它输出的文件会缓存放在这里，你是看不到的，这里必须这样配置
    filename: "[name].js"
  },
  devServer: {//webpack-server的配置
    host: 'localhost',//服务显示的地址localhsot  127.0.0.1  本机的ip地址都可以
    port: 8090,//服务的端口号
    open: true,//服务启动是否打开浏览器，打开的都是默认的浏览器
    contentBase: './',//服务器加载的目录，会自动找到该目录下的index.html文件进行页面展示
    inline: true,//页面刷新方式
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '首页',
      template: 'index.html',
      filename: 'index.html',
      hash:true,
      chunks: ["index"],
      chunksSortMode:'manual'
    })
  ],
  devtool: 'inline-source-map'
});