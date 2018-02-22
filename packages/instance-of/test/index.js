import { assert } from 'chai';
import forEach from 'mocha-each';
import instanceOf from '../src';

describe('InstanceOf', () => {
    forEach([
        [/^/, RegExp],
        [{}, Object],
        [[], Array]
    ]).it('valid with a value: %s', (value, instance) => {
        assert.isTrue(instanceOf(value, [instance]));
    });

    forEach([
        ['foo', Number],
        [10, Boolean],
        [true, String]
    ]).it('invalid with a value: %s', (value, instance) => {
        assert.isFalse(instanceOf(value, [instance]));
    });
});
