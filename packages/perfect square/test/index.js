import { assert } from 'chai';
import { getTypes, numberTypes, stringTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import perfectSquare from '../src';

describe('PerfectSquare', () => {
    forEach([
        1,
        9,
        25,
        '25',
        400,
        '400',
        '0',
        81,
        0,
        2500
    ]).it('valid with a value: %s', (value) => {
        assert.isTrue(perfectSquare(value));
    });

    forEach([
        250,
        7,
        -1,
        6,
        2,
        'foo',
        '',
        ' ',
        '   ',
        ...getTypes([...numberTypes, ...stringTypes])
    ]).it('invalid with a value: %s', (value) => {
        assert.isFalse(perfectSquare(value));
    });
});
