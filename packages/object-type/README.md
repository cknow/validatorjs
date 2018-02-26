# ObjectType

> Validates whether the type of an input is object.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/object-type.svg)](https://www.npmjs.com/package/@validatorjs/object-type)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/object-type.svg)](https://www.npmjs.com/package/@validatorjs/object-type)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/object-type.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/object-type
```

## Usage

- `objectType(input)`

```js
const objectType = require('@validatorjs/object-type');

objectType({}); // true
objectType('foo'); // false
```
