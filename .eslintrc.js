module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'eslint-', 'prettier'],
  rules: {
    'import/prefer-default-export': ['off'],
  },
}
