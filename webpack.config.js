const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const rootPath = path.join(__dirname, '/');

module.exports = {
	entry: {
		main: `${rootPath}/index.js`
	},
	output: {
		// filename: 'main-[name].js',
		filename: 'main.js',
		path: `${rootPath}/dist`
	},
	plugins: {
		autoprefixer: {}
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader'
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader'
					},
					// {
					// 	loader: 'postcss-loader'
					// },
					{
						loader: 'sass-loader',
						options: {
							name: '[name].css',
							outputPath: 'dist/css/'
						}
					}
				]
			},
			{
				test: /\.pug$/,
				loaders: ['html-loader', 'pug-html-loader']
			}
		]
	},
	plugins: [
		// new CopyWebpackPlugin([
		// 	{
		// 		from: 'src/scss/',
		// 		to: 'dist/scss/'
		// 	},
		// 	{
		// 		from: 'static/',
		// 		to: 'dist/'
		// 	}
		// ])
	],
	// 	new ExtractTextPlugin({ // define where to save the file
	// 		filename: 'style.css',
	// 		allChunks: true,
	// 	}),
	// ],
	watch: false,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	}
};
