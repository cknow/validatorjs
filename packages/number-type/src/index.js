/**
 * Validates whether the type of an input is a number.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function numberType(input) {
    return Number.isFinite(input);
}
