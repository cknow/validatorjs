import { parseToCalculate } from '@validatorjs/util';

/**
 * Validates if the given input is a nfe access key.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function nfeAccessKey(input) {
    if (!(input = parseToCalculate(input, 44))) {
        return false;
    }

    const w = [];

    let i;
    let z;
    let m;

    for (i = 0, z = 5, m = 43; i <= m; ++i) {
        if (i < m) {
            z = (z - 1) === 1 ? 9 : z - 1;
        } else {
            z = 0;
        }

        w.push(z);
    }

    for (i = 0, z = 0, m = 44; i < m; ++i) {
        z += Number(input[i]) * w[i];
    }

    z -= Math.floor(z / 11) * 11;

    return (z === 0 || z === 1 ? 0 : 11 - z) === Number(input[43]);
}
