// module.exports = {
//   root: true,
//   parserOptions: {
//     ecmaVersion: 6,
//     sourceType: 'module'
//   },
//   extends: 'eslint:recommended',
//   env: {
//     'browser': true
//   },
//   rules: {
//   }
// };

const path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, 'node_modules/ember-cli-eslint/coding-standard/ember-application.js'),
    path.join(__dirname, 'config/eslint/eslint.js')
  ]
};
