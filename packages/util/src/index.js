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
 *  A.
 *
 * @param {*} searcher A.
 * @param {*} input A.
 *
 * @return {boolean} A.
 */
export function arraySearch(searcher, input) {
    if (!Array.isArray(searcher)) {
        return false;
    }

    return searcher.findIndex(item => {
        if (!/boolean|number|string/i.test(typeof item) || !/boolean|number|string/i.test(typeof input)) {
            return false;
        }

        return String(item).toLocaleLowerCase() === String(input).toLocaleLowerCase();
    }) !== -1;
}
