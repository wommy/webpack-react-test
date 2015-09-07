var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: [
    	'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
    	path.resolve(ROOT_PATH, 'app/main.js'),
    ],
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js',
    },
    devServer: {
	    historyApiFallback: true,
	    hot: true,
	    inline: true,
	    progress: true
	  },
    plugins: [
    	new webpack.HotModuleReplacementPlugin(),
    	new HtmlwebpackPlugin({
    		title: 'wommyt'
    	})
    ]
};


// var webpackConfig = {
//   entry: 'index.js',
//   output: {
//     path: 'dist',
//     filename: 'index_bundle.js'
//   },
// }



