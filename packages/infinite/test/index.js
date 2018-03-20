import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import infinite from '../src';

describe('Infinite', () => {
    forEach([
        Infinity,
        -Infinity
    ]).it('valid with a value: %s', (value) => {
        assert.isTrue(infinite(value));
    });

    forEach([
        Number.MAX_SAFE_INTEGER,
        ...getTypes()
    ]).it('invalid with a value: %s', (value) => {
        assert.isFalse(infinite(value));
    });
});
