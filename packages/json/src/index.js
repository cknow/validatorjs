import objectType from '@validatorjs/object-type';

/**
 * Validates if the given input is a json.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default (input) => {
    try {
        const obj = JSON.parse(input);

        return Boolean(obj) && objectType(obj);
    } catch (e) { }

    return false;
};
