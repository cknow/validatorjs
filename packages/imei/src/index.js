import luhn from '@validatorjs/luhn';

/**
 * Validates if the given input is a imei.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => luhn(input, [15]);
