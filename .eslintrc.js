module.exports = {
  extends: ['eslint-config-tc', './index.js'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
};
