import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import pesel from '../src';

describe('Pesel', () => {
    forEach([
        0x4EADCD168,
        49040501580,
        '49040501580',
        '39012110375',
        '50083014540',
        '69090515504',
        '21120209256',
        '01320613891'
    ]).it('valid with a value: %s', value => {
        assert.isTrue(pesel(value));
    });

    forEach([
        '0x4EADCD168',
        'PESEL123456',
        '690905155.4',
        '21120209251',
        '21120209250',
        '01320613890',
        ...getTypes()
    ]).it('invalid with a value: %s', value => {
        assert.isFalse(pesel(value));
    });
});
