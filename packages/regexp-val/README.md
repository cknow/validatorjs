# RegexpVal

> Validates whether the value of input is regex.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/regexp-val.svg)](https://www.npmjs.com/package/@validatorjs/regexp-val)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/regexp-val.svg)](https://www.npmjs.com/package/@validatorjs/regexp-val)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/regexp-val.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/regexp-val
```

## Usage

- `regexpVal(input)`

```js
const regexpVal = require('@validatorjs/regexp-val');

regexpVal('[a-z]'); // true
regexpVal('*'); // false
```
