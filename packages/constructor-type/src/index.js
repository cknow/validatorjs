/**
 * Evaluates constructor type of on the input and validates if matches with constructor type.
 *
 * @param {*} input Input to validate.
 * @param {*} type Constructor type to compare.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function constructorType(input, [type]) {
    return Boolean(input) && typeof input === 'object' && input.constructor === type;
}
