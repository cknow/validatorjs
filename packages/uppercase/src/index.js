/**
 * Validates if the given input is a uppercase.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function uppercase(input) {
    return input === String(input).toLocaleUpperCase();
}
