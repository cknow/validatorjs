# Cpf

> Validates if the given input is a cpf.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/cpf.svg)](https://www.npmjs.com/package/@validatorjs/cpf)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/cpf.svg)](https://www.npmjs.com/package/@validatorjs/cpf)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/cpf.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/cpf
```

## Usage

- `cpf(input)`

```js
const cpf = require('@validatorjs/cpf');

cpf('342.444.198-88'); // true
cpf('11598647644'); // true
cpf('123.456.789-00'); // false
cpf('99999999999'); // false
```
