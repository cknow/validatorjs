import { parseToCalculate } from '@validatorjs/util';

/**
 * Validates if the given input is a cnpj.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function cnpj(input) {
    if (!(input = parseToCalculate(input, 14))) {
        return false;
    }

    const b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    let i;
    let n;

    for (i = 0, n = 0; i < 12; i++) {
        n += Number(input[i]) * b[i + 1];
    }

    if (Number(input[12]) !== ((n %= 11) < 2 ? 0 : 11 - n)) {
        return false;
    }

    for (i = 0, n = 0; i <= 12; i++) {
        n += Number(input[i]) * b[i];
    }

    if (Number(input[13]) !== ((n %= 11) < 2 ? 0 : 11 - n)) {
        return false;
    }

    return true;
}
