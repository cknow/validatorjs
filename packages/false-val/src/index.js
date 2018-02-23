import { arraySearch } from '@validatorjs/util';

/**
 * Validates whether the value of input is false.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function falseVal(input) {
    return arraySearch([0, false, 'off', 'no', 'n', ''], input);
}
