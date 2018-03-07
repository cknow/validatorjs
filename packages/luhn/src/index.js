import { parseToCalculate } from '@validatorjs/util';

/**
 * Validates if the given input is a luhn.
 *
 * @param {*} input Input to validate.
 * @param {number} [length=0] Length of number.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function luhn(input, [length = 0] = []) {
    if (!(input = parseToCalculate(input, length))) {
        return false;
    }

    let sum = 0;
    const parity = input.length % 2;

    for (let i = 0; i < input.length; ++i) {
        let digit = Number(input.substr(i, 1));

        if (parity === (i % 2)) {
            digit += digit;

            if (digit >= 9) {
                digit -= 9;
            }
        }

        sum += digit;
    }

    return (sum % 10) === 0;
}
