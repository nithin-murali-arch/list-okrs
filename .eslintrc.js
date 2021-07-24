module.exports = {
	parser: 'babel-eslint',
	env: {
		es2021: 'true',
		browser: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'airbnb',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		gapi: true,
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		indent: [
			'error',
			'tab',
		],
		'react/jsx-indent': [
			'error',
			'tab',
		],
		'react/jsx-indent-props': [
			'error',
			'tab',
		],
		'react/jsx-filename-extension': [
			1,
			{
				extensions: [
					'.js',
					'.jsx',
				],
			},
		],
		'no-plusplus': 0,
		'no-restricted-syntax': 0,
		'default-case': 0,
		'max-len': [
			'error',
			{
				code: 150,
			},
		],
		'react/forbid-prop-types': 0,
		'react/require-default-props': 0,
		'react/no-array-index-key': 0,
		'react/destructuring-assignment': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'prefer-arrow-callback': 0,
		'prefer-object-spread': 0,
		'func-names': 0,
		'no-tabs': 0,
		'import/no-cycle': 0,
		'react/jsx-props-no-spreading': 0,
		'no-shadow': 0,
		'import/prefer-default-export': 0,
		'no-template-curly-in-string': 0,
		'no-param-reassign': 0,
		'global-require': 0,
		'eslint-disable react/jsx-filename-extension': 0,
		'linebreak-style': [
			'error',
			'unix',
		],
		quotes: [
			'error',
			'single',
		],
		semi: [
			'error',
			'always',
		],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: [
					'.js',
					'.jsx',
				],
			},
		},
	},
};
