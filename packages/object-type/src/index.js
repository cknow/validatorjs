import { getConstructor } from '@validatorjs/util';

/**
 * Validates whether the type of an input is object.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function objectType(input) {
    return getConstructor(input) === Object;
}
