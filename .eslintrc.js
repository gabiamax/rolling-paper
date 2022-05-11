module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  extends: ['plugin:vue/recommended', '@vue/airbnb', '@vue/prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['prettier'],
  globals: {
    context: 'readonly',
    given2: 'readonly',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-shadow': 'off',
    'no-alert': 'off',
    'vue/no-v-html': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-name-property': 'off',
    'import/no-cycle': 'off',
    'no-use-before-define': 'off',
    camelcase: 'off',
    'no-unused-expressions': 'off',
    'import/no-self-import': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        bracketSpacing: true,
        printWidth: 120,
        arrowParens: 'always',
        endOfLine: 'auto', // 이 부분만 추가
      },
    ],
  },
};
