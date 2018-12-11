const webpack = require('webpack');
const path = require('path');

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
  entry: {
    index: [
      hotMiddlewareScript, './index.js'
    ]
  },
  output:{
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          'presets': ['es2015', 'stage-0']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}