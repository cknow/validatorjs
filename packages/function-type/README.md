# FunctionType

> Validates whether the type of an input is a function.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/function-type.svg)](https://www.npmjs.com/package/@validatorjs/function-type)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/function-type.svg)](https://www.npmjs.com/package/@validatorjs/function-type)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/function-type.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/function-type
```

## Usage

- `functionType(input)`

```js
const functionType = require('@validatorjs/function-type');

functionType(function() {}); // true
functionType('foo'); // false
```
