/**
 * Validates whether the value of input is symbol.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function symbolVal(input) {
    return /number|string|symbol|undefined/i.test(typeof input);
}
