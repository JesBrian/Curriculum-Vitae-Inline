const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Jarvis = require("webpack-jarvis");

const path = require('path');

const resolve = dir => {
  return path.join(__dirname, dir)
};

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
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }, {
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader', 'less-loader'
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
    new Jarvis({
      port: 9191 // optional: set a port
    })
  ],
  resolve: {
    //配置别名，在项目中可缩减引用路径
    alias: {
      '@': resolve('../src'),
      '_c': resolve('../src/components')
    },
    extensions: [' ', '.js', '.json', '.vue', '.scss', '.css']
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all"
  //   },
  //   runtimeChunk: true
  // }
};