import scalar from '@validatorjs/scalar';

/**
 * Validates if the given input is a found in the search engine.
 *
 * @param {*} input Input to validate.
 * @param {*} searcher Searcher engine.
 * @param {boolean} [identical=false] If identical, compare searcher type with input type.
 * @param {boolean} [contains=false] If contains, search in the searcher the input.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
const search = (input, [searcher, identical = false, contains = false] = []) => {
    if (scalar(searcher) && scalar(input)) {
        /* istanbul ignore next */
        if (identical && typeof searcher !== typeof input) {
            return false;
        }

        const regexp = RegExp(contains ? `${input}` : `^${input}$`, identical ? undefined : 'i');

        return String(searcher).search(regexp) !== -1;
    }

    if (Array.isArray(searcher)) {
        return searcher.findIndex((item) => search(input, [item, identical, contains])) !== -1;
    }

    return JSON.stringify(searcher) === JSON.stringify(input);
};

export default search;
