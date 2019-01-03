const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development', // 开发模式
  output: {
    path: '/', // 热加载模式不能指定输出的文件地址，它输出的文件会缓存放在这里，你是看不到的，这里必须这样配置
    filename: '[name].js'
  },
  devServer: { // webpack-server的配置
    host: 'localhost', // 服务显示的地址 localhsot  127.0.0.1  本机的ip地址都可以
    port: 8080, // 服务的端口号
    open: true, // 服务启动是否打开浏览器，打开的都是默认的浏览器
    inline: true, // 页面刷新方式
    contentBase: '/web/public/index.html', // 服务器加载的目录，会自动找到该目录下的index.html文件进行页面展示
    disableHostCheck: true,
    overlay: {
      errors: true//当webpack编译过程中出现任何错误,让它显示在网页上面
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '在线简历制作',
      template: './web/public/index.html',
      filename: 'index.html',
      inject: true,
      chunks: ['index'],
      chunksSortMode: 'manual'
    })
  ],
  devtool: 'inline-source-map' // 开启控制台输出错误信息具体在哪行
});