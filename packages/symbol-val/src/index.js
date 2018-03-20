/**
 * Validates whether the value of input is a symbol.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => /number|string|symbol|undefined/i.test(typeof input);
