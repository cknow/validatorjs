/**
 * Evaluates instance on the input and validates if matches with instance.
 *
 * @param {*} input Input to validate.
 * @param {*} instance Instance to compare.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function instanceOf(input, [instance]) {
    return input instanceof instance;
}
