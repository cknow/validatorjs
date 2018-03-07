# DateType

> Validates whether the type of an input is a date.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/date-type.svg)](https://www.npmjs.com/package/@validatorjs/date-type)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/date-type.svg)](https://www.npmjs.com/package/@validatorjs/date-type)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/date-type.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/date-type
```

## Usage

- `dateType(input)`

```js
const dateType = require('@validatorjs/date-type');

dateType(new Date()); // true
dateType('foo'); // false
```
