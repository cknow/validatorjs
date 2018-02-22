'use strict';

module.exports = input => Boolean(input) && typeof input === 'object' && input.constructor === RegExp;
