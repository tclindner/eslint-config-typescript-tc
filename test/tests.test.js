import {ESLint} from 'eslint';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import eslintConfig from '../index';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const lintFile = async (files) => {
  const linter = new ESLint({
    overrideConfigFile: path.resolve(dirname, 'testing.eslint.config.js'),
  });
  const results = await linter.lintFiles(files);
  const errorMessages = results[0].messages;
  const error = errorMessages[0];

  return error;
};

describe('eslint config tests', () => {
  describe('eslint config object', () => {
    test('should be an array', () => {
      expect(Array.isArray(eslintConfig)).toBe(true);
    });

    test('array elements should be objects', () => {
      const configObjects = eslintConfig.filter((item) => typeof item === 'object' && item !== null);

      expect(configObjects.length).toBeGreaterThan(0);

      expect(configObjects.every((config) => typeof config === 'object')).toBe(true);
    });
  });

  describe('run eslint and make sure it runs', () => {
    test('eslint should run without failing', async () => {
      const file = './test/fixtures/invalid-func-style.ts';
      const expectedErrorLineNum = 1;
      const expectedErrorColumnNum = 1;
      const error = await lintFile(file);

      expect(error.ruleId).toStrictEqual('func-style');
      expect(error.line).toStrictEqual(expectedErrorLineNum);
      expect(error.column).toStrictEqual(expectedErrorColumnNum);
      expect(error.message).toStrictEqual('Expected a function expression.');
    });
  });

  describe('enum format', () => {
    test('eslint should run without failing', async () => {
      const file = './test/fixtures/invalid-enum.ts';
      const expectedErrorLineNum = 1;
      const expectedErrorColumnNum = 6;
      const error = await lintFile(file);

      expect(error.ruleId).toStrictEqual('@typescript-eslint/naming-convention');
      expect(error.line).toStrictEqual(expectedErrorLineNum);
      expect(error.column).toStrictEqual(expectedErrorColumnNum);
      expect(error.message).toStrictEqual(
        'Enum name `notificationType` must match one of the following formats: PascalCase',
      );
    });
  });

  describe('enum member format', () => {
    test('eslint should run without failing', async () => {
      const file = './test/fixtures/invalid-enum-member.ts';
      const expectedErrorLineNum = 2;
      const expectedErrorColumnNum = 3;
      const error = await lintFile(file);

      expect(error.ruleId).toStrictEqual('@typescript-eslint/naming-convention');
      expect(error.line).toStrictEqual(expectedErrorLineNum);
      expect(error.column).toStrictEqual(expectedErrorColumnNum);
      expect(error.message).toStrictEqual('Enum Member name `banner` must match one of the following formats: PascalCase');
    });
  });
});
