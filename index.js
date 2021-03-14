module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
    '@typescript-eslint/array-type': ['error', {
      default: 'array'
    }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // dot-notation - note you must disable the base rule as it can report incorrect errors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": ["error"],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    // disable the rule for all files, see overrides below.
    '@typescript-eslint/explicit-function-return-type': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/method-signature-style.md
    '@typescript-eslint/method-signature-style': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
    '@typescript-eslint/no-dynamic-delete': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
    '@typescript-eslint/prefer-enum-initializers': 'error',


    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
    "prefer-optional-chain": "error",

  },
  overrides: [
    {
      // Enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        // Required for mixed JS/TS code bases - https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        '@typescript-eslint/explicit-function-return-type': ['error']
      }
    },
  ],
};
