const path = require('path');
const componentPath = path.resolve('./app');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const extractCSS = new ExtractTextPlugin('style.css', { allChunks: true });

module.exports = {
  entry: ['whatwg-fetch', './app/entry.js', './app/css/app.scss' ],
  target: 'electron',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  resolve: {
    root: [componentPath]
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss$/,
        loader: extractCSS.extract('style', ['css', 'postcss', 'sass'])
      }
    ]
  },
  plugins: [
    extractCSS,
    new CopyWebpackPlugin([
      { from: 'app/data/**/*', to: 'data/[name].[ext]' },
      { from: 'app/entry.js' },
      { from: 'app/index.html' },
      { from: 'package.json' },
      { from: 'index.js' }
    ], { copyUnmodified: true })
  ],
  postcss() {
    return [];
  }
};
