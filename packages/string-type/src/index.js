/**
 * Validates whether the type of an input is string.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function stringType(input) {
    return typeof input === 'string';
}
