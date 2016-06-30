
var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './src/main.js',
  output: { 
    path: __dirname, 
    filename: './build/bundle.js' 
  },
  module: {
    loaders: [
      {
        //tell webpack to use babel-loader for all *.jsx files
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
