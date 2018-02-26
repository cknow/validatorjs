# Scalar

> Validates whether the type of an input is scalar.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/scalar.svg)](https://www.npmjs.com/package/@validatorjs/scalar)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/scalar.svg)](https://www.npmjs.com/package/@validatorjs/scalar)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/scalar.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/scalar
```

## Usage

- `scalar(input)`

```js
const scalar = require('@validatorjs/scalar');

scalar('foo'); // true
scalar({}); // false
```
