const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin({
	filename: "[name].bundle.css"
});

// module.exports = {
// 	context: path.resolve(__dirname, './src'),

// 	entry: {
// 		app: './index.js',
// 	},
// 	output: {
// 		path: path.resolve(__dirname, 'dist'),
// 		filename: '[name].bundle.js',
// 	},
// 	module: {
// 		rules: [{
// 				test: /\.js$/,
// 				exclude: /(node_modules|bower_components)/,
// 				use: {
// 					loader: 'babel-loader',
// 					options: {
// 						presets: ['@babel/preset-env'],
// 						babelrc: false
// 					}
// 				}
// 			},
// 			{
// 				test: /\.css$/,
// 				use: extractCSS.extract({
// 					fallback: 'style-loader',
// 					use: ['css-loader']
// 				})
// 			},
// 			{
// 				test: /\.(sass|scss)$/,
// 				use: extractCSS.extract({

// 					fallback: ['style-loader'],
// 					use: ['css-loader',
// 						'sass-loader'
// 					]
// 				})
// 			},
// 			{
// 				test: /\.styl$/,
// 				use: extractCSS.extract({

// 					fallback: ['style-loader'],
// 					use: ['css-loader',
// 						'stylus-loader'
// 					]
// 				})
// 				// loader: 'style-loader!css-loader!stylus-loader'
// 			},
// 			{
// 				test: /\.(png|jpg|gif)$/,
// 				use: [{
// 					loader: 'url-loader',
// 					options: {
// 						limit: 8192
// 					}
// 				}]
// 			}
// 		]
// 	},
// 	plugins: [
// 		extractCSS
// 	],
// };