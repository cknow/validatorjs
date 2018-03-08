import { assert } from 'chai';
import { getTypes, objectTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import objectConstructor from '../src';

describe('ObjectConstructor', () => {
    forEach(objectTypes).it('valid with a value: %s', value => {
        assert.isTrue(objectConstructor(value));
    });

    forEach(getTypes(objectTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(objectConstructor(value));
    });
});
