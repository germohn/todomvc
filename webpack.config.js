var path = require('path');

var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: './src/index.html',
	filename: './dist/index.html',
	inject: 'body'
});

module.exports = {
	entry: './src/index.js',
	module: {
		loaders:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	output:{
		filename: 'dist/bundle.js',
		path: path.join(__dirname, '/'),
	},
	plugins: [HTMLWebpackPluginConfig]
};