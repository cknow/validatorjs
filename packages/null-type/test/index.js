import { assert } from 'chai';
import { getTypes, nullTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import nullType from '../src';

describe('NullType', () => {
    forEach(nullTypes).it('valid with a value: %s', value => {
        assert.isTrue(nullType(value));
    });

    forEach(getTypes(nullTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(nullType(value));
    });
});
