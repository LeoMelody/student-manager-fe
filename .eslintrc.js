const OFF = 0;
const ERROR = 2;

module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
  },
  'extends': [
    'airbnb',
    'airbnb/hooks',
    'plugin:eslint-comments/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 11,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    "import/no-cycle": ["error", { "maxDepth": Infinity }]
  },
};
