/**
 * Validates whether the type of an input is a float.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => Number.isFinite(input) && !Number.isInteger(input);
