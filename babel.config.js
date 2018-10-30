module.exports = function(api) {
	api.cache(true);

	return {
		presets: [
			'@babel/env',
			'@babel/preset-flow'
		],
		plugins: [
			'@babel/plugin-proposal-export-default-from',
			'@babel/plugin-syntax-dynamic-import',
			'@babel/plugin-transform-modules-commonjs'
		]
	}
};
