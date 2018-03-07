/**
 * Validates whether the type of an input is a array.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function arrayType(input) {
    return Array.isArray(input);
}
