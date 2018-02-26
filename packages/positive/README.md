# Positive

> Validates if a number is higher than zero.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/positive.svg)](https://www.npmjs.com/package/@validatorjs/positive)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/positive.svg)](https://www.npmjs.com/package/@validatorjs/positive)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/positive.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/positive
```

## Usage

- `positive(input)`

```js
const positive = require('@validatorjs/positive');

positive(12345); // true
positive(-12345); // false
```
