import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import luhn from '../src';

describe('Luhn', () => {
    forEach([
        '2222400041240011',
        '340316193809364',
        '6011000990139424',
        '2223000048400011'
    ]).it('valid with a value: %s', value => {
        assert.isTrue(luhn(value, [0]));
    });

    forEach([
        '2222400041240021',
        '340316193809334',
        '6011000990139421',
        '2223000048400010',
        ...getTypes()
    ]).it('invalid with a value: %s', value => {
        assert.isFalse(luhn(value));
    });
});
