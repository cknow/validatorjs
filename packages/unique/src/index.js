/**
 * Validates whether the input array contains only unique values.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => {
    if (!Array.isArray(input)) {
        return false;
    }

    const inputUnique = input
        .map((value) => JSON.stringify(value))
        .reverse()
        .filter((e, i, a) => a.indexOf(e, i + 1) === -1)
        .reverse()
        .map((value) => JSON.parse(value));

    return JSON.stringify(input) === JSON.stringify(inputUnique);
};
