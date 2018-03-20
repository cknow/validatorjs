/**
 * Evaluates constructor name of on the input and validates if matches with constructor name.
 *
 * @param {*} input Input to validate.
 * @param {*} name Constructor name to compare.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input, [name]) => {
    try {
        return String(input.constructor.name).toLocaleLowerCase() === String(name).toLocaleLowerCase();
    } catch (e) {}

    return false;
};
