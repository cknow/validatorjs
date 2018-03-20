import { getConstructor } from '@validatorjs/util';

/**
 * Validates whether the contructor of input is a object.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => getConstructor(input) === Object;
