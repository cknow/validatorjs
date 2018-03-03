# Cnpj

> Validates if the given input is a cnpj.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/cnpj.svg)](https://www.npmjs.com/package/@validatorjs/cnpj)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/cnpj.svg)](https://www.npmjs.com/package/@validatorjs/cnpj)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/cnpj.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/cnpj
```

## Usage

- `cnpj(input)`

```js
const cnpj = require('@validatorjs/cnpj');

cnpj('32.063.364/0001-07'); // true
cnpj('38175021000110'); // true
cnpj('12.345.678/9012-34'); // false
cnpj('84434895894444'); // false
```
