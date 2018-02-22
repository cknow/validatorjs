import { assert } from 'chai';
import { getTypes, floatTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import floatType from '../src';

describe('FloatType', () => {
    forEach(floatTypes).it('valid with a value: %s', value => {
        assert.isTrue(floatType(value));
    });

    forEach(getTypes(floatTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(floatType(value));
    });
});
