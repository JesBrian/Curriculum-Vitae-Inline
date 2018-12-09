var webpack = require('webpack');
var path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')]
  },
  entry: ["webpack-hot-middleware/client?noInfo=true&reload=true", "./index.js"],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.js'
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}