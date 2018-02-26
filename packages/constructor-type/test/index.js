import { assert } from 'chai';
import forEach from 'mocha-each';
import constructorType from '../src';

describe('ConstructorType', () => {
    forEach([
        [/^/, RegExp],
        [{}, Object],
        [[], Array]
    ]).it('valid "%2$s" with a value: %1$s', (value, type) => {
        assert.isTrue(constructorType(value, [type]));
    });

    forEach([
        ['foo', Number],
        [10, Boolean],
        [true, String],
        [null, null]
    ]).it('invalid "%2$s" with a value: %1$s', (value, type) => {
        assert.isFalse(constructorType(value, [type]));
    });
});
