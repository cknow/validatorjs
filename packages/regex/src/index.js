import regexVal from '@validatorjs/regex-val';
import scalar from '@validatorjs/scalar';

/**
 * Evaluates a regex on the input and validates if matches.
 *
 * @param {*} input Input to validate.
 * @param {string|RegExp} regexp RegExp to validate if matches.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input, [regexp]) => {
    if (!scalar(input) || !regexVal(regexp)) {
        return false;
    }

    return RegExp(regexp).test(String(input));
};
