/**
 * Validates whether the type of an input is symbol.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function symbolType(input) {
    return typeof input === 'symbol';
}
