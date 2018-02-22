import { assert } from 'chai';
import { getTypes, intTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import intType from '../src';

describe('IntType', () => {
    forEach(intTypes).it('valid with a value: %s', value => {
        assert.isTrue(intType(value));
    });

    forEach(getTypes(intTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(intType(value));
    });
});
