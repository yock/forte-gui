const path = require('path');
const componentPath = path.resolve('./app');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['whatwg-fetch', './app/entry.js', './app/css/app.scss' ],
  target: 'electron',
  output: {
    path: __dirname,
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
        loader: ExtractTextPlugin.extract('style', ['css', 'postcss', 'sass'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css", {
      allChunks: true
    })
  ],
  postcss() {
    return [];
  }
};
