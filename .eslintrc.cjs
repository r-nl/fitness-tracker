module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		'max-lines': ['error', { max: 200 }],
		'max-len': [
			'error',
			{
				code: 80
			}
		],
		'max-lines-per-function': [
			'error',
			{
				max: 150,
				skipBlankLines: true,
				skipComments: true
			}
		],
		'max-params': ['error', { max: 3 }],
		'no-nested-ternary': 'error',
		'id-length': ['error', { min: 3 }],
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-shadow': 'error',
		'complexity': ['error', { max: 10 }],
		'svelte/block-lang': [
			'error',
			{
				script: ['ts']
			}
		],
		'svelte/button-has-type': 'error',
		'svelte/no-at-debug-tags': 'error',
		'svelte/no-immutable-reactive-statements': 'error',
		'svelte/no-reactive-functions': 'error',
		'svelte/no-reactive-literals': 'error',
		'svelte/no-unused-svelte-ignore': 'error',
		'svelte/no-useless-mustaches': 'error',
		'svelte/prefer-destructured-store-props': 'error',
		'svelte/require-each-key': 'error',
		'svelte/require-event-dispatcher-types': 'error',
		'svelte/require-optimized-style-attribute': 'error',
		'svelte/require-stores-init': 'error',
		'svelte/valid-each-key': 'error'
	}
};