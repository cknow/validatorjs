import scalar from '@validatorjs/scalar';

/**
 * Validates whether the type of an input is undefined.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function search(input, [searcher, identical = false, contains = false] = []) {
    if (scalar(searcher)) {
        if (identical && typeof searcher !== typeof input) {
            return false;
        }

        const regexp = RegExp(contains ? `${input}` : `^${input}$`, identical ? undefined : 'i');

        return String(searcher).search(regexp) !== -1;
    }

    if (Array.isArray(searcher)) {
        return searcher.findIndex(item => search(input, [item, identical, contains])) !== -1;
    }

    return searcher === input;
}
