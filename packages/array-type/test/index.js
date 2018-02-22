import { assert } from 'chai';
import { getTypes, arrayTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import arrayType from '../src';

describe('ArrayType', () => {
    forEach(arrayTypes).it('valid with a value: %s', value => {
        assert.isTrue(arrayType(value));
    });

    forEach(getTypes(arrayTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(arrayType(value));
    });
});
