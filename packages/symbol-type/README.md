# SymbolType

> Validates whether the type of an input is a symbol.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/symbol-type.svg)](https://www.npmjs.com/package/@validatorjs/symbol-type)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/symbol-type.svg)](https://www.npmjs.com/package/@validatorjs/symbol-type)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/symbol-type.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/symbol-type
```

## Usage

- `symbolType(input)`

```js
const symbolType = require('@validatorjs/symbol-type');

symbolType(Symbol('foo')); // true
symbolType('foo'); // false
```
