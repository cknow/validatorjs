# Imei

> Validates if the given input is a imei.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/imei.svg)](https://www.npmjs.com/package/@validatorjs/imei)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/imei.svg)](https://www.npmjs.com/package/@validatorjs/imei)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/imei.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/imei
```

## Usage

- `imei(input)`

```js
const imei = require('@validatorjs/imei');

imei('350077523237513'); // true
imei('490154203237512'); // false
```
