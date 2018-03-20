import { assert } from 'chai';
import forEach from 'mocha-each';
import regex from '../src';

describe('Regex', () => {
    forEach([
        ['a', /[a-z]/],
        [1, /[1-9]/]
    ]).it('valid "%2$s" with a value: %1$s', (value, regexp) => {
        assert.isTrue(regex(value, [regexp]));
    });

    forEach([
        [1, /[a-z]/],
        ['a', /[1-9]/],
        ['foo', '*'],
        [Symbol('foobar'), /^/]
    ]).it('invalid "%2$s" with a value: %1$s', (value, regexp) => {
        assert.isFalse(regex(value, [regexp]));
    });
});

