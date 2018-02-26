import search from '@validatorjs/search';

/**
 * Validates whether the value of input is false.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function falseVal(input) {
    return search(input, [[0, false, 'off', 'no', 'n', '']]);
}
