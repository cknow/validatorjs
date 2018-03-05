import { parseToCalculate } from '@validatorjs/util';

/**
 * Validates if the given input is a pis.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function pis(input) {
    if (!(input = parseToCalculate(input, 11))) {
        return false;
    }

    const multipliers = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let summation = 0;

    for (let position = 0; position < 10; ++position) {
        summation += Number(input[position]) * multipliers[position];
    }

    return Number(input[10]) === (summation % 11 < 2 ? 0 : 11 - (summation % 11));
}
