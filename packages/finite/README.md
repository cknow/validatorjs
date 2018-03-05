# Finite

> Validates if the given input is a finite.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/finite.svg)](https://www.npmjs.com/package/@validatorjs/finite)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/finite.svg)](https://www.npmjs.com/package/@validatorjs/finite)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/finite.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/finite
```

## Usage

- `finite(input)`

```js
const finite = require('@validatorjs/finite');

finite(0); // true
finite(Infinity); // false
```
