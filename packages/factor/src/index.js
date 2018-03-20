import intVal from '@validatorjs/int-val';

/**
 * Validates if the given input is a factor of the defined dividend.
 *
 * @param {*} input Input to validate.
 * @param {number} dividend Dividend number.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input, [dividend]) => {
    if (dividend === 0) {
        return true;
    }

    if (!intVal(dividend) || !intVal(input) || Number(input) === 0) {
        return false;
    }

    return intVal(Math.abs(dividend) / Math.abs(Number(input)));
};
