import { parseToCalculate } from '@validatorjs/util';

/**
 * Validates if the given input is a cnh.
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
    let j;
    let v;

    for (i = 0, j = 9, v = 0; i < 9; ++i, --j) {
        v += Number(input[i]) * j;
    }

    let dsc = 0;
    let vl1 = v % 11;

    if (vl1 >= 10) {
        vl1 = 0;
        dsc = 2;
    }

    for (i = 0, j = 1, v = 0; i < 9; ++i, ++j) {
        v += Number(input[i]) * j;
    }

    const x = v % 11;
    const vl2 = x >= 10 ? 0 : x - dsc;

    return `${vl1}${vl2}` === input.substr(-2);
};
