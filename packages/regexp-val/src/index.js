/**
 * Validates whether the value of input is regex.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function regexpVal(input) {
    try {
        RegExp(input);

        return true;
    } catch (e) {}

    return false;
}
