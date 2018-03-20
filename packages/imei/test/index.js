import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import imei from '../src';

describe('Imei', () => {
    forEach([
        '35-007752-323751-3',
        '35-209900-176148-1',
        '350077523237513',
        '356938035643809',
        '490154203237518',
        350077523237513,
        356938035643809,
        490154203237518
    ]).it('valid with a value: %s', (value) => {
        assert.isTrue(imei(value));
    });

    forEach([
        '490154203237512',
        '4901542032375125',
        ...getTypes()
    ]).it('invalid with a value: %s', (value) => {
        assert.isFalse(imei(value));
    });
});
