// var path = require('path');
// var webpack = require('webpack');
// var WebpackDevServer = require("webpack-dev-server");
// var HtmlwebpackPlugin = require('html-webpack-plugin');

// var ROOT_PATH = path.resolve(__dirname);

// module.exports = {
//     entry: [
//     	'webpack/hot/dev-server',
//       'webpack-dev-server/client?http://localhost:8080',
//     	path.resolve(ROOT_PATH, 'app/main.js'),
//     ],
//     output: {
//         path: path.resolve(ROOT_PATH, 'build'),
//         filename: 'bundle.js',
//     },
//     devServer: {
// 	    historyApiFallback: true,
// 	    hot: true,
// 	    inline: true,
// 	    progress: true
// 	  },
//     plugins: [
//     	new webpack.HotModuleReplacementPlugin(),
//     	new HtmlwebpackPlugin({
//     		title: 'wommyt'
//     	})
//     ]
// };


// var webpackConfig = {
//   entry: 'index.js',
//   output: {
//     path: 'dist',
//     filename: 'index_bundle.js'
//   },
// }

var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel' // The module to load. "babel" is short for "babel-loader"
    }]
  }
};

module.exports = config;

