module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    semi: ['error', 'always'],
    'semi-style': ['error', 'last'],
    'quote-props': ['warn', 'as-needed'],
    quotes: ['warn', 'single'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',

  },
};
