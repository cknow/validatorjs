import { parseToCalculate } from '@validatorjs/util';

/**
 * Validates if the given input is a luhn.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function luhn(input) {
    if (!(input = parseToCalculate(input))) {
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
