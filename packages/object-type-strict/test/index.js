import { assert } from 'chai';
import { getTypes, objectTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import objectTypeStrict from '../src';

describe('ObjectTypeStrict', () => {
    forEach(objectTypes).it('valid with a value: %s', value => {
        assert.isTrue(objectTypeStrict(value));
    });

    forEach(getTypes(objectTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(objectTypeStrict(value));
    });
});
