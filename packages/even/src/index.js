import intVal from '@validatorjs/int-val';

/**
 * Validates if the given input is a even number.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => intVal(input) && input % 2 === 0;
