module.exports = {
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:consistent-default-export-name/fixed'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'ignorePatterns': ['*.config.js'],
  'rules': {
    'max-len': ['warn', { 'code': 80, 'ignorePattern': 'TODO:' }],
    'eqeqeq': 'off',
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-unused-vars': [
      'warn',
      { 'argsIgnorePattern': '^_' },
      { 'destructuredArrayIgnorePattern': '^_' },
      { 'varsIgnorePattern': '^_' }
    ],
    'quote-props': ['error', 'consistent'],
    'linebreak-style': ['error', 'unix'],
    'eol-last': 'off',
    'react/prop-types': 'off',
    'react/jsx-wrap-multilines': ['error', { return: 'parens-new-line' }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-newline': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'consistent-default-export-name/default-export-match-filename': 'error',
    'consistent-default-export-name/default-import-match-filename': 'error'
  }
}
