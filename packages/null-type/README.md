# NullType

> Validates whether the type of an input is a null.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/null-type.svg)](https://www.npmjs.com/package/@validatorjs/null-type)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/null-type.svg)](https://www.npmjs.com/package/@validatorjs/null-type)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/null-type.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/null-type
```

## Usage

- `nullType(input)`

```js
const nullType = require('@validatorjs/null-type');

nullType(null); // true
nullType('foo'); // false
```
