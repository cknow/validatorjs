'use strict';

const instanceOf = require('@validatorjs/instance-of');

module.exports = input => instanceOf(input, [Date]);
