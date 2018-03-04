/**
 * Validates if the given input is a lowercase.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function lowercase(input) {
    return input === String(input).toLocaleLowerCase();
}
