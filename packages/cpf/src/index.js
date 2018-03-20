import { parseToCalculate } from '@validatorjs/util';

/**
 * Validates if the given input is a cpf.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => {
    if (!(input = parseToCalculate(input, 11))) {
        return false;
    }

    let i;
    let n;
    let s;

    for (s = 10, n = 0, i = 0; s >= 2; s--) {
        n += Number(input[i++]) * s;
    }

    if (Number(input[9]) !== ((n %= 11) < 2 ? 0 : 11 - n)) {
        return false;
    }

    for (s = 11, n = 0, i = 0; s >= 2; s--) {
        n += Number(input[i++]) * s;
    }

    if (Number(input[10]) !== ((n %= 11) < 2 ? 0 : 11 - n)) {
        return false;
    }

    return true;
};
