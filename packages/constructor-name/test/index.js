import { assert } from 'chai';
import forEach from 'mocha-each';
import constructorName from '../src';

/* eslint-disable-next-line */
class Foo {}

describe('ConstructorName', () => {
    forEach([
        [new Foo(), 'foo'],
        ['foo', 'string'],
        [10, 'number']
    ]).it('valid "%2$s" with a value: %1$s', (value, name) => {
        assert.isTrue(constructorName(value, [name]));
    });

    forEach([
        [new Foo(), 'object'],
        ['foo', 'number'],
        [10, 'string'],
        [null, null]
    ]).it('invalid "%2$s" with a value: %1$s', (value, name) => {
        assert.isFalse(constructorName(value, [name]));
    });
});
