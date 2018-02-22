import floatType from '@validatorjs/float-type';
import numberVal from '@validatorjs/number-val';

/**
 * Validates whether the value of input is float.
 *
 * @param {*} input Input to validate.
 *
 * @return {boolean} Returns true if validate otherwise false.
 */
export default function floatVal(input) {
    return numberVal(input) && floatType(Number.parseFloat(input));
}
