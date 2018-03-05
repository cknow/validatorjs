# Locale

> Validates if the given input is a locale.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/locale.svg)](https://www.npmjs.com/package/@validatorjs/locale)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/locale.svg)](https://www.npmjs.com/package/@validatorjs/locale)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/locale.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/locale
```

## Usage

- `locale(input)`

```js
const locale = require('@validatorjs/locale');

locale('en_US'); // true
locale('invalid_locale'); // false
```
