import numberVal from '@validatorjs/number-val';

/**
 * Validates if the given input is a fibonacci.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function fibonacci(input) {
    if (!numberVal(input)) {
        return false;
    }

    const sequence = [0, 1];
    let position = 1;

    while (input > sequence[position]) {
        ++position;
        sequence[position] = sequence[position - 1] + sequence[position - 2];
    }

    return sequence[position] === Number(input);
}
