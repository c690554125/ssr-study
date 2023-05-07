const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-react',
									{
										runtime: 'automatic'
									}
								],
								'@babel/preset-env'
							]
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../../simple-ssr-study/')
		},
		extensions: [ '.js', '.jsx' ]
	}
};
