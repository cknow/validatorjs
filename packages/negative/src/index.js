import numberVal from '@validatorjs/number-val';

/**
 * Validates if a number is lower than zero.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function negative(input) {
    return numberVal(input) && input < 0;
}
