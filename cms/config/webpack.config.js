const { VueLoaderPlugin } = require('vue-loader');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: './cms/src/main.js'  //webpack的入口文件，指定将哪个文件进行打包
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
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /\.less$/,
      loaders: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader?name=img/[name].[ext]',
      options: {
        limit: 10000,
        // name: utils.assetsPath('img/[name].[ext]')
      }
    }, {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        // name: utils.assetsPath('media/[name].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader?name=fonts/[name].[ext]',
      options: {
        limit: 10000,
        // name: utils.assetsPath('fonts/[name].[ext]')
      }
    }]
  },
  plugins: [
    // 添加VueLoaderPlugin，以响应vue-loader
    new VueLoaderPlugin()
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: "all"
  //   },
  //   runtimeChunk: true
  // }
};