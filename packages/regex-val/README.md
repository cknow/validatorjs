# RegexVal

> Validates whether the value of input is a regex.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/regex-val.svg)](https://www.npmjs.com/package/@validatorjs/regex-val)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/regex-val.svg)](https://www.npmjs.com/package/@validatorjs/regex-val)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/regex-val.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/regex-val
```

## Usage

- `regexVal(input)`

```js
const regexVal = require('@validatorjs/regex-val');

regexVal('[a-z]'); // true
regexVal('*'); // false
```
