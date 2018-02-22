import { assert } from 'chai';
import { getTypes, objectTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import objectType from '../src';

describe('ObjectType', () => {
    forEach(objectTypes).it('valid with a value: %s', value => {
        assert.isTrue(objectType(value));
    });

    forEach(getTypes(objectTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(objectType(value));
    });
});
