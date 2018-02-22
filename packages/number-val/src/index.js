/**
 * Validates whether the value of input is number.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function numberVal(input) {
    if (Number.isFinite(input)) {
        return true;
    }

    if (typeof input !== 'string') {
        return false;
    }

    return Number.isFinite(Number.parseFloat(input));
}
