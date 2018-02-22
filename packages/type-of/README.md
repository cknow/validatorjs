# TypeOf

> Evaluates a regex on the type of input and validates if matches.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/type-of.svg)](https://www.npmjs.com/package/@validatorjs/type-of)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/type-of.svg)](https://www.npmjs.com/package/@validatorjs/type-of)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/type-of.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/type-of
```

## Usage

```js
var typeOf = require('@validatorjs/type-of');

typeOf('foo', ['string']); // true
typeOf('foo', ['number']); // false
```
