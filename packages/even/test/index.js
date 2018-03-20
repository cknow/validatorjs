import { assert } from 'chai';
import { getTypes, numberTypes, stringTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import even from '../src';

describe('Even', () => {
    forEach([
        -2,
        0,
        2,
        '6'
    ]).it('valid with a value: %s', (value) => {
        assert.isTrue(even(value));
    });

    forEach([
        -5,
        -1,
        1,
        5,
        '13',
        'foo',
        '',
        ' ',
        '   ',
        ...getTypes([...numberTypes, ...stringTypes])
    ]).it('invalid with a value: %s', (value) => {
        assert.isFalse(even(value));
    });
});
