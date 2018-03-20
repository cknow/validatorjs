import intVal from '@validatorjs/int-val';

/**
 * Validates if the given input is a perfect square.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => intVal(input) && Math.floor(Math.sqrt(input)) === Math.sqrt(input);
