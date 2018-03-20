# RegexType

> Validates whether the type of an input is a regex.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/regex-type.svg)](https://www.npmjs.com/package/@validatorjs/regex-type)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/regex-type.svg)](https://www.npmjs.com/package/@validatorjs/regex-type)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/regex-type.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/regex-type
```

## Usage

- `regexType(input)`

```js
const regexType = require('@validatorjs/regex-type');

regexType(/^/); // true
regexType('foo'); // false
```
