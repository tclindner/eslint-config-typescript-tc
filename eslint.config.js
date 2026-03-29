import baseConfig from 'eslint-config-tc';
import tsConfig from './index.js';

export default [
  {
    ignores: ['test/fixtures/*'],
  },
  ...baseConfig,
  ...tsConfig,
  {
    files: ['**/*.js', '**/*.ts'],
    rules: {
      'import-x/extensions': 'off',
      'import-x/no-extraneous-dependencies': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
