import { assert } from 'chai';
import forEach from 'mocha-each';
import instanceOf from '../src';

describe('InstanceOf', () => {
    forEach([
        [/^/, RegExp],
        [{}, Object],
        [[], Array]
    ]).it('valid "%2$s" with a value: %1$s', (value, instance) => {
        assert.isTrue(instanceOf(value, [instance]));
    });

    forEach([
        ['foo', Number],
        [10, Boolean],
        [true, String]
    ]).it('invalid "%2$s" with a value: %1$s', (value, instance) => {
        assert.isFalse(instanceOf(value, [instance]));
    });
});
