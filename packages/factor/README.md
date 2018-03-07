# Factor

> Validates if the given input is a factor of the defined dividend.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/factor.svg)](https://www.npmjs.com/package/@validatorjs/factor)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/factor.svg)](https://www.npmjs.com/package/@validatorjs/factor)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/factor.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/factor
```

## Usage

- `factor(input, [dividend])`

```js
const factor = require('@validatorjs/factor');

factor(2, [6])); // true
factor(2, [5]); // false
```
