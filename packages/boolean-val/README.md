# BooleanVal

> Validates whether the value of input is boolean.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/boolean-val.svg)](https://www.npmjs.com/package/@validatorjs/boolean-val)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/boolean-val.svg)](https://www.npmjs.com/package/@validatorjs/boolean-val)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/boolean-val.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/boolean-val
```

## Usage

- `booleanVal(input)`

```js
const booleanVal = require('@validatorjs/boolean-val');

booleanVal('on'); // true
booleanVal('off'); // true
booleanVal('foo'); // false
booleanVal('bar'); // false
```
