module.exports = {
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		strict: true,
		jsx: true
	},
	env: {
		browser: true,
		es2022: true
	},
	plugins: [
		'react',
		'jsx-a11y',
		'import'
	],
	extends: ['eslint-config-airbnb'],
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/jsx-props-no-spreading': 0,
		'react/destructuring-assignment': 0,
		'react/forbid-prop-types': 0,
		'react/jsx-props-no-multi-spaces': 0,
		'react/jsx-indent': [2, 'tab', { checkAttributes: true, indentLogicalExpressions: true }],
		'react/jsx-indent-props': [2, 'tab'],
		'jsx-quotes': [2, 'prefer-single'],
		// ---------------------
		'no-tabs': 0,
		'no-param-reassign': 0,
		'no-continue': 0,
		'max-len': 0,
		'consistent-return': 0,
		'prefer-destructuring': 0,
		'no-restricted-syntax': 0,
		'default-case': 0,
		'no-template-curly-in-string': 0,
		'no-console': 0,
		'jsx-a11y/label-has-associated-control': 0,
		// ---------------------
		semi: [2, 'never'],
		indent: [2, 'tab'],
		quotes: [2, 'single'],
		'comma-dangle': [2, 'never'],
		'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
		'linebreak-style': [2, 'unix'],
		'prefer-const': 2,
		'no-var': 2,
		'object-curly-newline': [2, { consistent: true }],
	}
}