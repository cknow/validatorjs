import { assert } from 'chai';
import forEach from 'mocha-each';
import factor from '../src';

describe('Factor', () => {
    forEach([
        ['1', 1],
        ['1', 6],
        [1, 1],
        [1, 2],
        [2, 2],
        [1, 3],
        [3, 3],
        [1, 4],
        [2, 4],
        [4, 4],
        [1, 5],
        [5, 5],
        [1, 6],
        [2, 6],
        [3, 6],
        [6, 6],
        [0, 0],
        [1, 0]
    ]).it('valid with a value: %s', (value, dividend) => {
        assert.isTrue(factor(value, [dividend]));
    });

    forEach([
        [1.1, 1],
        [-1.1, 1],
        ['0.2', 1],
        ['.2', 1],
        ['-.2', 1],
        ['165.7', 1],
        ['', 1],
        [null, 1],
        ['a', 1],
        [' ', 1],
        ['Foo', 1],
        [2, 3],
        [3, 4],
        [2, 5],
        [3, 5],
        [4, 5],
        [0, 1],
        [0, 2],
        [null, 0.5],
        [null, 1.5],
        [null, -0.5],
        [null, -1.5],
        [undefined, -1.5],
        [false, -1.5],
        [null, Number.MAX_SAFE_INTEGER + 1]
    ]).it('invalid with a value: %s', (value, dividend) => {
        assert.isFalse(factor(value, [dividend]));
    });
});
