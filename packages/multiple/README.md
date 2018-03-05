# Multiple

> Validates if the given input is a multiple of the given parameter.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/multiple.svg)](https://www.npmjs.com/package/@validatorjs/multiple)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/multiple.svg)](https://www.npmjs.com/package/@validatorjs/multiple)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/multiple.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/multiple
```

## Usage

- `multiple(input, [multipleOf])`

```js
const multiple = require('@validatorjs/multiple');

multiple(5, [10]); // true
multiple(5, [3]); // false
```
