# Regex

> Evaluates a regex on the input and validates if matches.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/regex.svg)](https://www.npmjs.com/package/@validatorjs/regex)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/regex.svg)](https://www.npmjs.com/package/@validatorjs/regex)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/regex.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/regex
```

## Usage

- `regex(input, [regexp])`

```js
const regex = require('@validatorjs/regex');

regex('a', ['/[a-z]/']); // true
regex('1', ['/[a-z]/']); // false
```
