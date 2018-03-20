import { assert } from 'chai';
import { getTypes, numberTypes, stringTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import fibonacci from '../src';

describe('Fibonacci', () => {
    forEach([
        1,
        2,
        3,
        5,
        8.0,
        '3',
        21,
        21.0,
        '21.0',
        34,
        '34',
        1346269,
        10610209857723
    ]).it('valid with a value: %s', (value) => {
        assert.isTrue(fibonacci(value));
    });

    forEach([
        0,
        1346268,
        7,
        -1,
        5.2,
        '-1',
        'foo',
        '',
        ' ',
        '   ',
        ...getTypes([...numberTypes, ...stringTypes])
    ]).it('invalid with a value: %s', (value) => {
        assert.isFalse(fibonacci(value));
    });
});
