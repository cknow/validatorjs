import numberVal from '@validatorjs/number-val';

/**
 * Validates if the given input is a finite.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function finite(input) {
    return numberVal(input) && Number.isFinite(Number(input));
}
