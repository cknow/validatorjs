import { assert } from 'chai';
import forEach from 'mocha-each';
import typeOf from '../src';

describe('TypeOf', () => {
    forEach([
        ['foo', 'string'],
        [10, 'number'],
        [true, 'boolean'],
        [undefined, 'undefined']
    ]).it('valid "%2$s" with a value: %1$s', (value, type) => {
        assert.isTrue(typeOf(value, [type]));
    });

    forEach([
        ['foo', 'number'],
        [10, 'boolean'],
        [true, 'string'],
        [undefined]
    ]).it('invalid "%2$s" with a value: %1$s', (value, type) => {
        assert.isFalse(typeOf(value, [type]));
    });
});
