const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const rootPath = path.join(__dirname, '/');

module.exports = {

	entry: {
		main: `${rootPath}/index.js`
	},
	output: {
		//	filename: 'main[name].js',
		filename: 'main.js',
		path: `${rootPath}/dist`
	},
	module: {
		rules: [
			/*
			your other rules for JavaScript transpiling go in here
			*/
			// { // regular css files
			// 	test: /\.css$/,
			// 	loader: ExtractTextPlugin.extract({
			// 		loader: 'css-loader?importLoaders=1',
			// 	}),
			// },
			{ // sass / scss loader for webpack
				test: /\.(sass|scss)$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: 'src/scss/',
			to: 'scss/'
		}]),
		new ExtractTextPlugin({ // define where to save the file
			filename: 'style.css',
			allChunks: true,
		}),
	],
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	}
};