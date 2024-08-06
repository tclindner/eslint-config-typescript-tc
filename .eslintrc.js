module.exports = {
  extends: ['eslint-config-tc'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./index.js'],
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
