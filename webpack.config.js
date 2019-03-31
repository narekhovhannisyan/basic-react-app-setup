const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

const exclude = /(node_modules)/

module.exports = {
	entry: './src/app/index.tsx',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude
			},
			{
				test: /\.tsx?$/,
				use: ['ts-loader'],
				exclude
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				},
				exclude
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/app/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	],
};
