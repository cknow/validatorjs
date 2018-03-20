/**
 * Validates whether the type of an input is a regex.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => input instanceof RegExp;
