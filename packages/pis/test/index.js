import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import pis from '../src';

describe('Pis', () => {
    forEach([
        '120.4454.683-5',
        '120.8995.084-8',
        '120.5146.8577',
        '120.01842459',
        '1.2.0.7.9.8.1.6.7.8.2',
        '12044546835',
        '12089950848',
        '12051468577',
        '12001842459',
        '12079816782',
        12079816782
    ]).it('valid with a value: %s', (value) => {
        assert.isTrue(pis(value));
    });

    forEach([
        '000.0000.000-0',
        '111.2222.444-5',
        '999999999.99',
        '8.8.8.8.8.8.8.8.8.8.8',
        '693-3129-110-1',
        '698.1131-111.2',
        '11111111111',
        '22222222222',
        '12345678901',
        '99299929384',
        '84434895894',
        '44242340002',
        ...getTypes()
    ]).it('invalid with a value: %s', (value) => {
        assert.isFalse(pis(value));
    });
});
