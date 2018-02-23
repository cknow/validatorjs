import intType from '@validatorjs/int-type';
import numberVal from '@validatorjs/number-val';

/**
 * Validates whether the value of input is int.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function intVal(input) {
    return numberVal(input) && intType(Number.parseFloat(input));
}