# TypeOf

> Evaluates type of on the input and validates if matches with type.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/type-of.svg)](https://www.npmjs.com/package/@validatorjs/type-of)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/type-of.svg)](https://www.npmjs.com/package/@validatorjs/type-of)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/type-of.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/type-of
```

## Usage

- `typeOf(input, [type])`

```js
const typeOf = require('@validatorjs/type-of');

typeOf('foo', ['string']); // true
typeOf('foo', ['number']); // false
```
