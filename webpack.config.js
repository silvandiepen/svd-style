var path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{ test: /\.pug/, use: 'pug-html-loader' },
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'sass-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			}
		]
	}
};
