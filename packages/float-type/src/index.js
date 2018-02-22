/**
 * Validates whether the type of an input is float.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function floatType(input) {
    return Number.isFinite(input) && !Number.isInteger(input);
}