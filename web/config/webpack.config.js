const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Jarvis = require("webpack-jarvis");

module.exports = {
  entry: {
    index: './web/src/main.js'  //webpack的入口文件，指定将哪个文件进行打包
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: [
        'vue-loader',
        {
          loader: 'iview-loader',
          options: {
            prefix: false
          }
        }
      ]
    }, {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader', 'sass-loader'
      ]
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
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[id].css'
    }),
    new OptimizeCssAssetsPlugin(),
    new Jarvis({
      port: 8181 // optional: set a port
    })
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: "all"
  //   },
  //   runtimeChunk: true
  // }
};