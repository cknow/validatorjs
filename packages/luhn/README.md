# Luhn

> Validates if the given input is a luhn.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/luhn.svg)](https://www.npmjs.com/package/@validatorjs/luhn)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/luhn.svg)](https://www.npmjs.com/package/@validatorjs/luhn)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/luhn.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/luhn
```

## Usage

- `luhn(input)`

```js
const luhn = require('@validatorjs/luhn');

luhn('2222400041240011'); // true
luhn('2222400041240021'); // false
```
