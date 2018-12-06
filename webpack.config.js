const path = require('path');
const webpack = require('webpack');

var browserConfig = {
  target: 'web',
  entry:{
   "youtube-api-v3-search": './src',
   "youtube-api-v3-search.min": "./src",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library:'searchYoutube'
  },
  node: {
    process: false
  },
  module:{
  loaders:[
    {
      test:/\.js$/,
      exclude:/(node_modules)/,
      loader:'babel-loader',
      query:{
        presets:['env']
      }

    }]
  },
  plugins: [
   new webpack.optimize.UglifyJsPlugin({
     include: /\.min\.js$/,
     minimize: true
   }),
   new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
 ]

};


module.exports = [ browserConfig ];
