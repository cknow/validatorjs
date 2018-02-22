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
    ]).it('valid with a value: %s', (value, name) => {
        assert.isTrue(constructorName(value, [name]));
    });

    forEach([
        [new Foo(), 'object'],
        ['foo', 'number'],
        [10, 'string']
    ]).it('invalid with a value: %s', (value, name) => {
        assert.isFalse(constructorName(value, [name]));
    });
});
