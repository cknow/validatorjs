/**
 * Validates if the given input is a lowercase.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => input === String(input).toLocaleLowerCase();
