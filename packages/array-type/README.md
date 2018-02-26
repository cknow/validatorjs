# ArrayType

> Validates whether the type of an input is array.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/array-type.svg)](https://www.npmjs.com/package/@validatorjs/array-type)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/array-type.svg)](https://www.npmjs.com/package/@validatorjs/array-type)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/array-type.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/array-type
```

## Usage

- `arrayType(input)`

```js
const arrayType = require('@validatorjs/array-type');

arrayType([1, 2, 3]); // true
arrayType('foo'); // false
```
