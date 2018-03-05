# Timezone

> Validates if the given input is a timezone.

[![NPM Version](https://img.shields.io/npm/v/@validatorjs/timezone.svg)](https://www.npmjs.com/package/@validatorjs/timezone)
[![Downloads](https://img.shields.io/npm/dt/@validatorjs/timezone.svg)](https://www.npmjs.com/package/@validatorjs/timezone)
[![MIT License](https://img.shields.io/npm/l/@validatorjs/timezone.svg)](../../LICENSE)

## Installation

```bash
npm install --save @validatorjs/timezone
```

## Usage

- `timezone(input)`

```js
const timezone = require('@validatorjs/timezone');

timezone('Europe/Paris'); // true
timezone('invalid/timezone'); // false
```
