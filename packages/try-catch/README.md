# TryCatch

> Validates input function with try catch.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/try-catch.svg)](https://www.npmjs.com/package/@validatorjs/try-catch)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/try-catch.svg)](https://www.npmjs.com/package/@validatorjs/try-catch)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/try-catch.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/try-catch
```

## Usage

- `tryCatch(input)`

```js
const tryCatch = require('@validatorjs/try-catch');

tryCatch(() => true); // true
tryCatch(() => new Error('error')); // false
```
