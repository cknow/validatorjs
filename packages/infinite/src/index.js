/**
 * Validates if the given input is a infinite.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function infinite(input) {
    return input === Infinity || input === -Infinity;
}
