import { parseToCalculate } from '@validatorjs/util';

/**
 * Validates if the given input is a bsn.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => {
    if (!(input = parseToCalculate(input, 9))) {
        return false;
    }

    let sum = Number(input[8]) * -1;

    for (let i = 9; i > 1; --i) {
        sum += Number(input[9 - i]) * i;
    }

    return sum !== 0 && sum % 11 === 0;
};
