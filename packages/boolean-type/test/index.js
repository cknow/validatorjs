import { assert } from 'chai';
import { getTypes, booleanTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import booleanType from '../src';

describe('BooleanType', () => {
    forEach(booleanTypes).it('valid with a value: %s', value => {
        assert.isTrue(booleanType(value));
    });

    forEach(getTypes(booleanTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(booleanType(value));
    });
});
