import { assert } from 'chai';
import { getTypes, floatTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import floatVal from '../src';

const floatValTypes = [
    ...floatTypes,
    '0.1',
    '1.1',
    '-0.1',
    '-1.1'
];

describe('FloatVal', () => {
    forEach(floatValTypes).it('valid with a value: %s', (value) => {
        assert.isTrue(floatVal(value));
    });

    forEach(getTypes(floatValTypes)).it('invalid with a value: %s', (value) => {
        assert.isFalse(floatVal(value));
    });
});
