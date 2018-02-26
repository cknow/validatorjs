# NumberVal

> Validates whether the value of input is number.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/number-val.svg)](https://www.npmjs.com/package/@validatorjs/number-val)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/number-val.svg)](https://www.npmjs.com/package/@validatorjs/number-val)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/number-val.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/number-val
```

## Usage

- `numberVal(input)`

```js
const numberVal = require('@validatorjs/number-val');

numberVal('12345'); // true
numberVal('foo'); // false
```
