import intVal from '@validatorjs/int-val';

/**
 * Validates if the given input is a odd number.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function odd(input) {
    return intVal(input) && input % 2 !== 0;
}
