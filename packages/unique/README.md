# Unique

> Validates whether the input array contains only unique values.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/unique.svg)](https://www.npmjs.com/package/@validatorjs/unique)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/unique.svg)](https://www.npmjs.com/package/@validatorjs/unique)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/unique.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/unique
```

## Usage

- `unique(input)`

```js
const unique = require('@validatorjs/unique');

unique([1, 2, 3]); // true
unique([1, 2, 2, 3]); // false
```
