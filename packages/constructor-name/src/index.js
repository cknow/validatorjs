import tryCatch from '@validatorjs/try-catch';

/**
 * Evaluates constructor name of on the input and validates if matches with constructor name.
 *
 * @param {*} input Input to validate.
 * @param {*} name Constructor name to compare.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function constructorName(input, [name]) {
    return tryCatch((value, o) => {
        const name1 = String(value.constructor.name).toLocaleLowerCase();
        const name2 = String(o).toLocaleLowerCase();

        return name1 === name2;
    }, [input, name]);
}
