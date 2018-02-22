/**
 * Validates whether the type of an input is boolean.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function booleanType(input) {
    return typeof input === 'boolean';
}
