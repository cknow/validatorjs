# ConstructorType

> Evaluates constructor type of on the input and validates if matches with constructor type.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/constructor-type.svg)](https://www.npmjs.com/package/@validatorjs/constructor-type)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/constructor-type.svg)](https://www.npmjs.com/package/@validatorjs/constructor-type)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/constructor-type.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/constructor-type
```

## Usage

- `constructorType(input, [type])`

```js
const constructorType = require('@validatorjs/constructor-type');

constructorType('foo', [String]); // true
constructorType({}, [Number]); // false
```
