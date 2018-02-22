/**
 * Validates whether the type of an input is object.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function objectType(input) {
    return Boolean(input) && typeof input === 'object' && input.constructor === Object;
}
