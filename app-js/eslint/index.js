// export default {
//   'style': require('./rules/style.js'),
// }

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/style',
    './rules/es6',
    './rules/errors',
    './rules/react',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
}
