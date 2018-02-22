/**
 * Validates whether the type of an input is regexp.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function regexpType(input) {
    return Boolean(input) && typeof input === 'object' && input.constructor === RegExp;
}
