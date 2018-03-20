import { assert } from 'chai';
import {
    getTypes,
    arrayTypes,
    dateTypes,
    nullTypes,
    objectTypes,
    regexTypes
} from '@validatorjs/test';

import forEach from 'mocha-each';
import objectType from '../src';

const objectValues = [
    ...arrayTypes,
    ...dateTypes,
    ...nullTypes,
    ...objectTypes,
    ...regexTypes
];

describe('ObjectType', () => {
    forEach(objectValues).it('valid with a value: %s', (value) => {
        assert.isTrue(objectType(value));
    });

    forEach(getTypes(objectValues)).it('invalid with a value: %s', (value) => {
        assert.isFalse(objectType(value));
    });
});
