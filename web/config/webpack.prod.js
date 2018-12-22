const merge = require('webpack-merge');//用于合并两个配置文件的工具
const common = require('./webpack.config.js');//加载之前定义的配置文件
const HtmlWebpackPlugin = require('html-webpack-plugin');//HTTPWebpackPlugin这个会经常用到，是可以将你所有配置好的东西打包成一个html文件，功能很强大，我在这简单介绍一下怎么用，具体的大家可以自行了解
module.exports = merge(common, {
  output: {
    path: __dirname + "/dist",//打包后输出的文件地址，我这里配置的地址是我项目中SpringMVC存放页面的地方，如果你只需要前台请自行修改这里的配置，其实不修改也行，它会自动创建这个地址的，__dirname是webpack中的全局关键字，存放的项目的根目录的绝对路径
    filename: "[name].js"//打包后输出的文件名，[name]就是使用入口文件的key做名称
  },
  plugins: [
    new HtmlWebpackPlugin({//要使用就必须得new出来
      title: '在线简历制作',//生成的html文件的title
      template: 'index.html',//生成的html文件可以使用定义好的模板，生成好的html文件会继承模板的所有内容，同时如果模板里面定义好了title，上面的title配置是不会生效的
      filename: 'index.html',//生成的title文件的名称
      hash: true,//是否产生hash值
      chunks: ["index"],//加载那些js文件，这个js文件就是输出的js文件名
      chunksSortMode: 'manual'//排序方式
    })
  ],
  devtool: 'inline-source-map'//开启控制台输出错误信息具体在哪行
});