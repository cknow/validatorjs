# Pis

> Validates if the given input is a pis.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/pis.svg)](https://www.npmjs.com/package/@validatorjs/pis)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/pis.svg)](https://www.npmjs.com/package/@validatorjs/pis)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/pis.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/pis
```

## Usage

- `pis(input)`

```js
const pis = require('@validatorjs/pis');

pis('120.4454.683-5'); // true
pis('12044546835'); // true
pis('111.2222.444-5'); // false
pis('12345678901'); // false
```
