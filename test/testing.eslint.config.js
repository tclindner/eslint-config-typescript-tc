import config from '../eslint.config.js';

export default [
  ...config,
  {
    ignores: ['!test/fixtures/*'],
  },
];
