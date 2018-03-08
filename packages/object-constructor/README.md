# ObjectConstructor

> Validates whether the contructor of input is a object.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/object-constructor.svg)](https://www.npmjs.com/package/@validatorjs/object-constructor)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/object-constructor.svg)](https://www.npmjs.com/package/@validatorjs/object-constructor)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/object-constructor.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/object-constructor
```

## Usage

- `objectConstructor(input)`

```js
const objectConstructor = require('@validatorjs/object-constructor');

objectConstructor({}); // true
objectConstructor('foo'); // false
```
