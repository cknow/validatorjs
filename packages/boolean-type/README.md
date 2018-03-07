# BooleanType

> Validates whether the type of an input is a boolean.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/boolean-type.svg)](https://www.npmjs.com/package/@validatorjs/boolean-type)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/boolean-type.svg)](https://www.npmjs.com/package/@validatorjs/boolean-type)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/boolean-type.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/boolean-type
```

## Usage

- `booleanType(input)`

```js
const booleanType = require('@validatorjs/boolean-type');

booleanType(true); // true
booleanType('foo'); // false
```
