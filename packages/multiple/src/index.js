import numberVal from '@validatorjs/number-val';

/**
 * Validates if the given input is a multiple of the given parameter.
 *
 * @param {*} input Input to validate.
 * @param {number} multipleOf Multiplicator number.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function multiple(input, [multipleOf]) {
    if (!numberVal(input) || !numberVal(multipleOf)) {
        return false;
    }

    if (multipleOf === 0) {
        return multipleOf === input;
    }

    return input % multipleOf === 0;
}
