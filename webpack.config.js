const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
	devServer: {
		// Display only errors to reduce the amount of output.
		stats: 'errors-only',

		// 0.0.0.0 is available to all network devices
		// unlike default `localhost`.
		host: process.env.HOST, // Defaults to `localhost`
		port: process.env.PORT, // Defaults to 8080
		open: true // Open the page in browser
	},
	module: {

		rules: [
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [
						{
							loader: 'css-loader', options: { minimize: true } 
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
			}
		]
	},
	plugins: [
		extractSass,
		extractHtml,
		new CopyWebpackPlugin([{ from: 'src', to: 'src' }])
	]
};
