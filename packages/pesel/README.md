# Pesel

> Validates if the given input is a pesel.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/pesel.svg)](https://www.npmjs.com/package/@validatorjs/pesel)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/pesel.svg)](https://www.npmjs.com/package/@validatorjs/pesel)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/pesel.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/pesel
```

## Usage

- `pesel(input)`

```js
const pesel = require('@validatorjs/pesel');

pesel('49040501580'); // true
pesel('21120209251'); // false
```
