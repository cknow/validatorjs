# Search

> Validates whether the value of input is found in the search engine.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/search.svg)](https://www.npmjs.com/package/@validatorjs/search)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/search.svg)](https://www.npmjs.com/package/@validatorjs/search)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/search.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/search
```

## Usage

- `search(input, [searcher])`
- `search(input, [searcher, identical = false])`
- `search(input, [searcher, identical = false, contains = false])`

```js
const search = require('@validatorjs/search');

search('foo', [['FOO', 'bar']]); // true
search('FOO', [['FOO', 'bar'], true]); // true
search('FOO', [['FOObar', 'bar'], true, true]); // true
search('foo', [['foobar']]); // false
search('foo', [['FOO'], true]); // false
search('foo', [['bar'], true, true]); // false
```
