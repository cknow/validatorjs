import search from '@validatorjs/search';

/**
 * Validates whether the value of input is a false.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => search(input, [[0, false, 'off', 'no', 'n', '']]);
