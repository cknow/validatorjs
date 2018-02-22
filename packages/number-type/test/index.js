import { assert } from 'chai';
import { getTypes, floatTypes, intTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import numberType from '../src';

const numberTypes = [
    ...floatTypes,
    ...intTypes
];

describe('NumberType', () => {
    forEach(numberTypes).it('valid with a value: %s', value => {
        assert.isTrue(numberType(value));
    });

    forEach(getTypes(numberTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(numberType(value));
    });
});
