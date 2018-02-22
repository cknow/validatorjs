'use strict';

const typeOf = require('@validatorjs/type-of');

module.exports = input => typeOf(input, ['string']);
