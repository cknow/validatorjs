# InstanceOf

> Evaluates a instance on the input and validates if matches.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/instance-of.svg)](https://www.npmjs.com/package/@validatorjs/instance-of)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/instance-of.svg)](https://www.npmjs.com/package/@validatorjs/instance-of)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/instance-of.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/instance-of
```

## Usage

```js
var instanceOf = require('@validatorjs/instance-of');

instanceOf('foo', [String]); // true
instanceOf('foo', [Number]); // false
```
