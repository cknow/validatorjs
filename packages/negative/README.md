# Negative

> Validates if a number is lower than zero.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/negative.svg)](https://www.npmjs.com/package/@validatorjs/negative)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/negative.svg)](https://www.npmjs.com/package/@validatorjs/negative)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/negative.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/negative
```

## Usage

- `negative(input)`

```js
const negative = require('@validatorjs/negative');

negative(-12345); // true
negative(12345); // false
```
