/**
 * Validates whether the type of an input is date.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function dateType(input) {
    return input instanceof Date;
}
