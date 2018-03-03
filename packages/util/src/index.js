import scalar from '@validatorjs/scalar';

/**
 * A.
 *
 * @param {*} input A.
 *
 * @return {*} A.
 */
export function getConstructor(input) {
    return Boolean(input) && typeof input === 'object' ? input.constructor : undefined;
}

/**
 * A.
 *
 * @param {*} input A.
 * @param {*} length A.
 *
 * @return {*} A.
 */
export function parseToCalculate(input, length = 0) {
    if (!scalar(input)) {
        return false;
    }

    const inputString = String(input).replace(/[^\d]/g, '');

    if (!inputString || Number(inputString) === 0) {
        return false;
    }

    if (length <= 0) {
        return inputString;
    }

    if (inputString.length !== length || RegExp(`${Number(inputString[0])}{${length}}`).test(inputString)) {
        return false;
    }

    return inputString;
}
