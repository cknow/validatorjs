import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import bsn from '../src';

describe('Bsn', () => {
    forEach([
        '612890053',
        '087880532',
        '386625918',
        '601608021',
        '254650703',
        '478063441',
        '478063441',
        '187368429',
        '541777348',
        '254283883'
    ]).it('valid with a value: %s', (value) => {
        assert.isTrue(bsn(value));
    });

    forEach([
        '1234567890',
        '0987654321',
        '13579024',
        '612890054',
        '854650703',
        '283958721',
        '231859081',
        '189023323',
        '238150912',
        '382409678',
        '38240.678',
        '38240a678',
        'abcdefghi',
        ...getTypes()
    ]).it('invalid with a value: %s', (value) => {
        assert.isFalse(bsn(value));
    });
});
