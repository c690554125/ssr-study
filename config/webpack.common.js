export default {
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					options: {
						loader: 'babel-loader',
						preset: [
							'@babel/preset-react',
							[
								'@babel/preset-env',
								{
									targets: {
										browsers: [ 'last 2 versions' ]
									}
								}
							]
						]
					}
				}
			}
		]
	}
};
