import { assert } from 'chai';
import forEach from 'mocha-each';
import multiple from '../src';

describe('Multiple', () => {
    forEach([
        [0, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
        [0, 5],
        [5, 5],
        [10, 5],
        [20, 5],
        [500, 5],
        [-5, 5],
        [-10, 5],
        [-500, 5],
        [3, 1.5],
        [6, 1.5],
        ['6', 1.5]
    ]).it('valid "%2$s" with a value: %1$s', (value, multipleOf) => {
        assert.isTrue(multiple(value, [multipleOf]));
    });

    forEach([
        [1, 0],
        ['', 0],
        ['a', 1],
        ['foo', 1],
        [11, 5],
        [3, 5],
        [-1, 5],
        [4, 3],
        [-8, 10],
        [57, 10],
        [21, 10],
        [1, 0],
        [2, 0],
        [4, 1.5],
        [2, 1.5],
        ['2', 1.5],
        [5, 'foo'],
        [5, true]
    ]).it('invalid "%2$s" with a value: %1$s', (value, multipleOf) => {
        assert.isFalse(multiple(value, [multipleOf]));
    });
});
