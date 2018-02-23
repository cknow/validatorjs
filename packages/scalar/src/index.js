/**
 * Validates whether the type of an input is scalar.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function scalar(input) {
    return /boolean|number|string/i.test(typeof input);
}
