# Infinite

> Validates if the given input is a infinite.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/infinite.svg)](https://www.npmjs.com/package/@validatorjs/infinite)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/infinite.svg)](https://www.npmjs.com/package/@validatorjs/infinite)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/infinite.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/infinite
```

## Usage

- `infinite(input)`

```js
const infinite = require('@validatorjs/infinite');

infinite(Infinity); // true
infinite(0); // false
```
