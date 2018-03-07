# CurrencyCode

> Validates if the given input is a currency code.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/currency-code.svg)](https://www.npmjs.com/package/@validatorjs/currency-code)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/currency-code.svg)](https://www.npmjs.com/package/@validatorjs/currency-code)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/currency-code.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/currency-code
```

## Usage

- `currencyCode(input)`

```js
const currencyCode = require('@validatorjs/currency-code');

currencyCode('EUR'); // true
currencyCode('foo'); // false
```
