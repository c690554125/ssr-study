const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.common');

const clientConfig = {
	target: 'web',
	mode: 'development',
	entry: path.resolve(__dirname, '../cli/index.js'),
	output: {
		filename: 'bundle.client.js',
		path: path.resolve(__dirname, '../build')
	}
};

module.exports = merge(config, clientConfig);
