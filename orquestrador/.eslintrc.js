const path = require('path');

module.exports = {
    root: true,
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
        configFile: path.resolve(__dirname, 'babel.config.js')
        },
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    rules: {
        // suas regras personalizadas
    }
}
  