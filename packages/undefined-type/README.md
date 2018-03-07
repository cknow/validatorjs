# UndefinedType

> Validates whether the type of an input is a undefined.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/undefined-type.svg)](https://www.npmjs.com/package/@validatorjs/undefined-type)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/undefined-type.svg)](https://www.npmjs.com/package/@validatorjs/undefined-type)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/undefined-type.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/undefined-type
```

## Usage

- `undefinedType(input)`

```js
const undefinedType = require('@validatorjs/undefined-type');

undefinedType(undefined); // true
undefinedType('foo'); // false
```
