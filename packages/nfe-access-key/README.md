# NfeAccessKey

> Validates if the given input is a nfe access key.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/nfe-access-key.svg)](https://www.npmjs.com/package/@validatorjs/nfe-access-key)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/nfe-access-key.svg)](https://www.npmjs.com/package/@validatorjs/nfe-access-key)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/nfe-access-key.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/nfe-access-key
```

## Usage

- `nfeAccessKey(input)`

```js
const nfeAccessKey = require('@validatorjs/nfe-access-key');

nfeAccessKey('52060433009911002506550120000007800267301615'); // true
nfeAccessKey('31841136830118868211870485416765268625116906'); // false
```
