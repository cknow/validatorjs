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
