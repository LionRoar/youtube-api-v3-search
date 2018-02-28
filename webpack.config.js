const path = require('path');
const webpack = require('webpack');

var browserConfig = {
  target: 'web',
  entry:{
   "youtube-api-v3-search": './src/browser.js',
   "youtube-api-v3-search.min": "./src/browser.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library:'searchYoutube'
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
   })
 ]

};


module.exports = [ browserConfig ];
