import * as types from './types';

/**
 * Get types to validate.
 *
 * @param {*} except Except types.
 *
 * @return {array} Returns types filtered.
 */
export function getTypes(except = []) {
    let result = [];

    for (const type of Object.keys(types)) {
        result = [...result, ...types[type]];
    }

    return result.filter(value => !except.includes(value));
}
