import { merge } from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';
import commonConfig from './webpack.common.js';
import { resolvePath } from './helper.js';

const config = merge(commonConfig, {
	target: 'node',
	mode: 'development',
	entry: resolvePath('../server/index.js'),
	externalsPresets: { node: true },
	externals: [ nodeExternals() ],
	output: {
		filename: 'bundle.js',
		path: resolvePath('../build')
	}
});

export default config;
