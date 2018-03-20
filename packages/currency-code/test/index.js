import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import currencyCode from '../src';

describe('CurrencyCode', () => {
    forEach([
        'EUR',
        'BRL',
        'USD',
        'xba',
        'xxx'
    ]).it('valid with a value: %s', (value) => {
        assert.isTrue(currencyCode(value));
    });

    forEach([
        'USA',
        'BRA',
        ...getTypes()
    ]).it('invalid with a value: %s', (value) => {
        assert.isFalse(currencyCode(value));
    });
});
