module.exports = {
  ignorePatterns: ['build/', 'dist/', 'node_modules/'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Ensure Prettier integration
  ],
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: false,
        printWidth: 120,
        trailingComma: 'es5', // Adds consistent trailing commas
        bracketSpacing: true, // Adds spacing in object literals
        arrowParens: 'always', // Adds parentheses around arrow function arguments
        tabWidth: 2, // Consistent indentation
        useTabs: false, // Spaces over tabs
      },
    ],
    'react/prop-types': process.env.FAIL_LINT ? 2 : 0,
    'react/jsx-uses-vars': 'warn',
  },
};
