# ObjectTypeStrict

> Validates whether the contructor of input is a object.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/object-type-strict.svg)](https://www.npmjs.com/package/@validatorjs/object-type-strict)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/object-type-strict.svg)](https://www.npmjs.com/package/@validatorjs/object-type-strict)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/object-type-strict.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/object-type-strict
```

## Usage

- `objectTypeStrict(input)`

```js
const objectTypeStrict = require('@validatorjs/object-type-strict');

objectTypeStrict({}); // true
objectTypeStrict('foo'); // false
```
