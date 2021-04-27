# eslint-config-typescript-tc

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for TypeScript projects

[![license](https://img.shields.io/github/license/tclindner/eslint-config-typescript-tc.svg?maxAge=2592000&style=flat-square)](https://github.com/tclindner/eslint-config-typescript-tc/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/eslint-config-typescript-tc.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/eslint-config-typescript-tc)
![ci](https://github.com/tclindner/eslint-config-typescript-tc/workflows/ci/badge.svg?branch=main)
[![Dependency Status](https://david-dm.org/tclindner/eslint-config-typescript-tc.svg?style=flat-square)](https://david-dm.org/tclindner/eslint-config-typescript-tc)
[![devDependency Status](https://david-dm.org/tclindner/eslint-config-typescript-tc/dev-status.svg?style=flat-square)](https://david-dm.org/tclindner/eslint-config-typescript-tc#info=devDependencies)

## What is eslint-config-typescript-tc?

Shared configuration for ESLint. Follow the instructions below to easily include this configuration in another project without having to duplicate the file!

# How do I install it?

First thing first, let's make sure you have the necessary pre-requisites.

### System Dependencies

#### Node

* [Node.js](https://nodejs.org/) - v12.0.0+
* [npm](http://npmjs.com) - v6.0.0+

### Command

```bash
npx install-peerdeps --dev eslint-config-typescript-tc
```

> @typescript-eslint/parser and eslint-config-prettier are peer dependencies and must be installed.

**This module works best when paired with [`eslint-config-tc`](https://github.com/tclindner/eslint-config-tc). Please follow its install instructions.**

## Usage

Add the following to your `.eslintrc.json` file:

```json
{
	"extends": "eslint-config-typescript-tc"
}
```

If you need to override a rule, your `.eslintrc.json` file should look like the example below. All shared rules will be used, but `@typescript-eslint/array-type` will be turned off.

```json
{
	"extends": "eslint-config-typescript-tc",
	"rules": {
		"@typescript-eslint/array-type": "off"
	}
}
```

## Related

- [eslint-config-tc](https://github.com/tclindner/eslint-config-tc) - ESLint shareable config for JavaScript projects

## Contributing

Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## Change Log

Please see the [CHANGELOG.md](CHANGELOG.md) for more information.

## License

Copyright (c) 2020-2021 Thomas Lindner. Licensed under the MIT license.
