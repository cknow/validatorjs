# NumberType

> Validates whether the type of an input is number.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/number-type.svg)](https://www.npmjs.com/package/@validatorjs/number-type)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/number-type.svg)](https://www.npmjs.com/package/@validatorjs/number-type)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/number-type.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/number-type
```

## Usage

```js
const numberType = require('@validatorjs/number-type');

numberType(12345); // true
numberType('foo'); // false
```
