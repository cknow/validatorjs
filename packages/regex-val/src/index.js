/**
 * Validates whether the value of input is a regex.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => {
    try {
        RegExp(input);

        return true;
    } catch (e) {}

    return false;
};
