const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  ignores: [
    'dist',
    'pnpm-lock.yaml',
    'package-lock.json',
    'yarn.lock',
    'src/interfaces',
    '.data',
  ],
}, {
  rules: {
    // https://academy.subquery.network/build/testing.html#logging
    'no-console': 'error',

    'ts/consistent-type-definitions': 'off',
    'test/prefer-lowercase-title': 'off',
    'prefer-exponentiation-operator': 'off',
    'dot-notation': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'ts/consistent-type-imports': 'off',
    'curly': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'no-debugger': 'off',
    'no-restricted-syntax': 'off',
  },
})
