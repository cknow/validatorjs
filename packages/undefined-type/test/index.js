import { assert } from 'chai';
import { getTypes, undefinedTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import undefinedType from '../src';

describe('UndefinedType', () => {
    forEach(undefinedTypes).it('valid with a value: %s', value => {
        assert.isTrue(undefinedType(value));
    });

    forEach(getTypes(undefinedTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(undefinedType(value));
    });
});
