
var path = require('path');
var webpack = require('webpack');

var buildPath = 'build/'
var distPath = '../src/static/'


module.exports = {
	entry: {
		
		'slidemain': ['./src/jsx/main.jsx'],
		'vendor' : [ 'react', 'react-dom'],
		
		
	},
	resolve:{
		alias:{
			// utils: path.join(__dirname, '/src/jsx/common/utils'),
			// chart: path.join(__dirname, '/src/jsx/chart.jsx'),
			// rbutils: path.join(__dirname, '/src/jsx/robo/rbutils/rbutils.jsx'),

			utils: path.join(__dirname, '/src/jsx/common/utils'),
			mainview: path.join(__dirname, '/src/jsx/mainview'),
			subtitlebar: path.join(__dirname, '/src/jsx/subtitlebar'),

		}
	},
	output: { 
		path: __dirname + '/build/', 
		filename: 'app.bundle.[name].js',
		libraryTarget: "umd",
		
	},
	module: {
		loaders: [
			{
				//tell webpack to use babel-loader for all *.js or *.jsx files
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [
						// 'es2015',
						// 'es2015-native-modules', 'react'
						["es2015", { "loose": true, "modules": false }],	// https://github.com/araphel/babel-preset-es2015-native-modules
						'react'
					],
					
				},
				
			},
			// {
			// 	test: /index.jsx?$/,
			// 	loader: 'imports?jQuery=jquery'
			// }
			{ 
				test: /\.css$/, 
				loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
			},
			// {
			// 	test: /\.scss$/,
			// 	loaders: ["style", "css", "sass"]
			// },
			// {
			// 	test: /\.wo`ff2?$|\.ttf$|\.eot$|\.svg$/,
			// 	loader: 'file'
			// }
			// { 
			// 	// https://github.com/webpack/expose-loader
			// 	test: require.resolve("datatables.net"), 
			// 	loader: 'imports?define=>false!datatables.net' 
			// },
			
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor'),
		
	]
};

