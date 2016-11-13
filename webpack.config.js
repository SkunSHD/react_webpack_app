var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  context: __dirname,

  entry: {
    bundle: './src/main.jsx'
  },

  output: {
    filename: '[name].js',
    path: './src/build'
  },

  devtool: "cheap-inline-module-source-map",

  module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?sourceMap!sass?sourceMap'
                )
            }
        ]
  },
  plugins: [
      new ExtractTextPlugin('styles.css')
  ]
};

module.exports = config;