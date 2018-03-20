/**
 * Validates whether the type of an input is a scalar.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => /boolean|number|string/.test(typeof input);
