import { arraySearch } from '@validatorjs/util';

/**
 * Validates whether the value of input is true.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function trueVal(input) {
    return arraySearch([1, true, 'on', 'yes', 'y', 's'], input);
}
