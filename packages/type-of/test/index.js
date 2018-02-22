import { assert } from 'chai';
import forEach from 'mocha-each';
import typeOf from '../src';

describe('TypeOf', () => {
    forEach([
        ['foo', 'string'],
        [10, 'number'],
        [true, 'boolean']
    ]).it('valid with a value: %s', (value, type) => {
        assert.isTrue(typeOf(value, [type]));
    });

    forEach([
        ['foo', 'number'],
        [10, 'boolean'],
        [true, 'string']
    ]).it('invalid with a value: %s', (value, type) => {
        assert.isFalse(typeOf(value, [type]));
    });
});
