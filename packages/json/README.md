# Json

> Validates if the given input is a json.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/json.svg)](https://www.npmjs.com/package/@validatorjs/json)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/json.svg)](https://www.npmjs.com/package/@validatorjs/json)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/json.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/json
```

## Usage

- `json(input)`

```js
const json = require('@validatorjs/json');

json('{"foo":"bar"}'); // true
json({}); // false
```
