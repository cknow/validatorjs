# Tld

> Validates if the given input is a tld (top-level domain).

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/tld.svg)](https://www.npmjs.com/package/@validatorjs/tld)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/tld.svg)](https://www.npmjs.com/package/@validatorjs/tld)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/tld.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/tld
```

## Usage

- `tld(input)`

```js
const tld = require('@validatorjs/tld');

tld('com'); // true
tld('foobar'); // false
```
