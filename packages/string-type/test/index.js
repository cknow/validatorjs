import { assert } from 'chai';
import { getTypes, stringTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import stringType from '../src';

describe('StringType', () => {
    forEach(stringTypes).it('valid with a value: %s', value => {
        assert.isTrue(stringType(value));
    });

    forEach(getTypes(stringTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(stringType(value));
    });
});
