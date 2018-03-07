# IntType

> Validates whether the type of an input is a int.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/int-type.svg)](https://www.npmjs.com/package/@validatorjs/int-type)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/int-type.svg)](https://www.npmjs.com/package/@validatorjs/int-type)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/int-type.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/int-type
```

## Usage

- `intType(input)`

```js
const intType = require('@validatorjs/int-type');

intType(1); // true
intType(1.1); // false
```
