import numberVal from '@validatorjs/number-val';

/**
 * Validates if a number is higher than zero.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => numberVal(input) && input > 0;
