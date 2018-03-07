/**
 * Validates whether the type of an input is a object.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function objectType(input) {
    return typeof input === 'object';
}
