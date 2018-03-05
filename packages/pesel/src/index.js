import { parseToCalculate } from '@validatorjs/util';

/**
 * Validates if the given input is a pesel.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function pesel(input) {
    if (!(input = parseToCalculate(input, 11))) {
        return false;
    }

    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    const targetControlNumber = Number(input[10]);

    let calculateControlNumber = 0;

    for (let i = 0; i < 10; ++i) {
        calculateControlNumber += Number(input[i]) * weights[i];
    }

    calculateControlNumber = (10 - (calculateControlNumber % 10)) % 10;

    return targetControlNumber === calculateControlNumber;
}
