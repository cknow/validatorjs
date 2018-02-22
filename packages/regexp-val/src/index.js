import tryCatch from '@validatorjs/try-catch';

/**
 * Validates whether the value of input is regex.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function regexpVal(input) {
    return tryCatch(value => {
        RegExp(input);

        return true;
    }, [input]);
}
