/**
 * Evaluates type of on the input and validates if matches with type.
 *
 * @param {*} input Input to validate.
 * @param {string} type Typeof to compare.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
/* eslint-disable valid-typeof */
export default (input, [type]) => typeof input === type;
/* eslint-enable valid-typeof */
