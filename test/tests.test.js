/* eslint-disable @typescript-eslint/no-var-requires */
const eslint = require('eslint');
const isPlainObj = require('is-plain-obj');
const eslintConfig = require('../index.js');
/* eslint-enable @typescript-eslint/no-var-requires */

describe('eslint config tests', () => {
  describe('eslint object', () => {
    test('should be an object', () => {
      expect(isPlainObj(eslintConfig)).toBe(true);
    });
  });

  describe('run eslint and make sure it runs', () => {
    test('eslint should run without failing', () => {
      const code = `function myString(myString: String): String {return myString;}`;
      const expectedErrorLineNum = 1;
      const expectedErrorColumnNum = 1;
      const linter = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: '.eslintrc.json',
      });
      const errors = linter.executeOnText(code).results[0].messages;
      const error = errors[0];

      expect(error.ruleId).toStrictEqual('func-style');
      expect(error.line).toStrictEqual(expectedErrorLineNum);
      expect(error.column).toStrictEqual(expectedErrorColumnNum);
      expect(error.message).toStrictEqual('Expected a function expression.');
    });
  });
});
