# ConstructorName

> Evaluates constructor name of on the input and validates if matches with constructor name.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/constructor-name.svg)](https://www.npmjs.com/package/@validatorjs/constructor-name)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/constructor-name.svg)](https://www.npmjs.com/package/@validatorjs/constructor-name)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/constructor-name.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/constructor-name
```

## Usage

- `constructorName(input, [name])`

```js
const constructorName = require('@validatorjs/constructor-name');

class Foo {}

constructorName(new Foo(), ['Foo']); // true
constructorName(new Foo(), ['Object']); // false
```
