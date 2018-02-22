import { assert } from 'chai';
import forEach from 'mocha-each';
import constructorType from '../src';

describe('ConstructorType', () => {
    forEach([
        [/^/, RegExp],
        [{}, Object],
        [[], Array]
    ]).it('valid with a value: %s', (value, type) => {
        assert.isTrue(constructorType(value, [type]));
    });

    forEach([
        ['foo', Number],
        [10, Boolean],
        [true, String]
    ]).it('invalid with a value: %s', (value, type) => {
        assert.isFalse(constructorType(value, [type]));
    });
});
