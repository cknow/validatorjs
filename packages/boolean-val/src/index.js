import falseVal from '@validatorjs/false-val';
import trueVal from '@validatorjs/true-val';

/**
 * Validates whether the value of input is a boolean.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => falseVal(input) || trueVal(input);
