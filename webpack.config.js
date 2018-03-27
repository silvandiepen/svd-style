const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: 'style.css'
});

const extractHtml = new ExtractTextPlugin({
	filename: 'index.html'
});

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader'
						}
					],
					// use style-loader in development
					fallback: 'style-loader'
				})
			},
			{
				test: /\.pug$/,
				use: extractHtml.extract({
					use: [
						{
							loader: 'raw-loader'
						},
						{
							loader: 'pug-html-loader'
						}
					]
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [extractSass, extractHtml]
};
