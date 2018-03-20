import { assert } from 'chai';
import { getTypes, numberTypes, stringTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import odd from '../src';

describe('Odd', () => {
    forEach([
        -5,
        -1,
        1,
        5,
        '13'
    ]).it('valid with a value: %s', (value) => {
        assert.isTrue(odd(value));
    });

    forEach([
        -2,
        0,
        2,
        '6',
        'foo',
        '',
        ' ',
        '   ',
        ...getTypes([...numberTypes, ...stringTypes])
    ]).it('invalid with a value: %s', (value) => {
        assert.isFalse(odd(value));
    });
});
