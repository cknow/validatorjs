# RegexpType

> Validates whether the type of an input is regexp.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/regexp-type.svg)](https://www.npmjs.com/package/@validatorjs/regexp-type)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/regexp-type.svg)](https://www.npmjs.com/package/@validatorjs/regexp-type)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/regexp-type.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/regexp-type
```

## Usage

- `regexpType(input)`

```js
const regexpType = require('@validatorjs/regexp-type');

regexpType(/^/); // true
regexpType('foo'); // false
```
