/**
 * Validates whether the type of an input is a int.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function intType(input) {
    return Number.isInteger(input);
}
