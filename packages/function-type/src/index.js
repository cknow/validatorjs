/**
 * Validates whether the type of an input is a function.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function functionType(input) {
    return typeof input === 'function';
}
