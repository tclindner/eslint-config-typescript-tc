/* eslint-disable @typescript-eslint/no-var-requires */
const eslint = require('eslint');
const isPlainObj = require('is-plain-obj');
const eslintConfig = require('../index.js');
/* eslint-enable @typescript-eslint/no-var-requires */

const lintFile = (files) => {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: '.eslintrc.json',
  });
  const errors = linter.executeOnFiles(files).results[0].messages;
  const error = errors[0];

  return error;
};

describe('eslint config tests', () => {
  describe('eslint object', () => {
    test('should be an object', () => {
      expect(isPlainObj(eslintConfig)).toBe(true);
    });
  });

  describe('run eslint and make sure it runs', () => {
    test('eslint should run without failing', () => {
      const file = './test/fixtures/invalid-func-style.ts';
      const expectedErrorLineNum = 1;
      const expectedErrorColumnNum = 1;
      const error = lintFile(file);

      expect(error.ruleId).toStrictEqual('func-style');
      expect(error.line).toStrictEqual(expectedErrorLineNum);
      expect(error.column).toStrictEqual(expectedErrorColumnNum);
      expect(error.message).toStrictEqual('Expected a function expression.');
    });
  });

  describe('enum format', () => {
    test('eslint should run without failing', () => {
      const file = './test/fixtures/invalid-enum.ts';
      const expectedErrorLineNum = 1;
      const expectedErrorColumnNum = 6;
      const error = lintFile(file);

      expect(error.ruleId).toStrictEqual('@typescript-eslint/naming-convention');
      expect(error.line).toStrictEqual(expectedErrorLineNum);
      expect(error.column).toStrictEqual(expectedErrorColumnNum);
      expect(error.message).toStrictEqual(
        'Enum name `notificationType` must match one of the following formats: PascalCase'
      );
    });
  });

  describe('enum member format', () => {
    test('eslint should run without failing', () => {
      const file = './test/fixtures/invalid-enum-member.ts';
      const expectedErrorLineNum = 2;
      const expectedErrorColumnNum = 3;
      const error = lintFile(file);

      expect(error.ruleId).toStrictEqual('@typescript-eslint/naming-convention');
      expect(error.line).toStrictEqual(expectedErrorLineNum);
      expect(error.column).toStrictEqual(expectedErrorColumnNum);
      expect(error.message).toStrictEqual('Enum Member name `banner` must match one of the following formats: PascalCase');
    });
  });
});
