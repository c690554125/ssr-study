const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const commonConfig = require('./webpack.common');
const path = require('path');

module.exports = merge(commonConfig, {
	mode: 'development',
	entry: path.resolve(__dirname, '../server/index'),
	externalsPresets: { node: true },
	externals: [ nodeExternals() ],
	output: {
		filename: 'bundle.server.js',
		path: path.resolve(__dirname, '../build')
	}
});
