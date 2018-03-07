# StringType

> Validates whether the type of an input is a string.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/string-type.svg)](https://www.npmjs.com/package/@validatorjs/string-type)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/string-type.svg)](https://www.npmjs.com/package/@validatorjs/string-type)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/string-type.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/string-type
```

## Usage

- `stringType(input)`

```js
const stringType = require('@validatorjs/string-type');

stringType('foo'); // true
stringType(true); // false
```
