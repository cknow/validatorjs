/**
 * Validates input function with try catch.
 *
 * @param {*} input Input function to validate.
 * @param {*} args Arguments to pass function.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function tryCatch(input, [...args] = []) {
    try {
        return input(...args);
    } catch (e) {}

    return false;
}
