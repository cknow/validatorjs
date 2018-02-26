# Search

> Validates whether the type of an input is undefined.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/search.svg)](https://www.npmjs.com/package/@validatorjs/search)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/search.svg)](https://www.npmjs.com/package/@validatorjs/search)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/search.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/search
```

## Usage

```js
const search = require('@validatorjs/search');

search('foo', [['FOO', 'bar']]); // true
search('FOO', [['FOO', 'bar'], true]); // true
search('FOO', [['FOObar', 'bar'], true, true]); // true
search('foo', [['foobar']]); // false
search('foo', [['FOO'], true]); // false
search('foo', [['bar'], true, true]); // false
```
