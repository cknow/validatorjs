import { assert } from 'chai';
import { getTypes, numberTypes, stringTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import finite from '../src';

describe('Finite', () => {
    forEach([
        '123456',
        -9,
        0,
        16,
        2,
        Number.MAX_SAFE_INTEGER
    ]).it('valid with a value: %s', (value) => {
        assert.isTrue(finite(value));
    });

    forEach([
        Infinity,
        -Infinity,
        '123foo456',
        'foo',
        '',
        ' ',
        '   ',
        ...getTypes([...numberTypes, ...stringTypes])
    ]).it('invalid with a value: %s', (value) => {
        assert.isFalse(finite(value));
    });
});
