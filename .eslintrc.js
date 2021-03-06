module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    mocha: true,
    node: true,
    es6: true,
  },
  plugins: [
    'react',
    'import',
    'immutable',
    'flowtype',
    'jsx-a11y',
  ],
  rules: {
    'no-console': 0,
    "flowtype/define-flow-type": 2,
    "flowtype/use-flow-type": 2,
    "flowtype/valid-syntax": 2,
    'import/no-extraneous-dependencies': 0,
    'immutable/no-let': 2,
    'immutable/no-this': 2,
    'immutable/no-mutation': 2
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
