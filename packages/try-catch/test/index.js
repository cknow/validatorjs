import { assert } from 'chai';
import forEach from 'mocha-each';
import tryCatch from '../src';

describe('TryCatch', () => {
    forEach([
        [() => true],
        [arg => arg === 'foo', 'foo'],
        [(arg1, arg2) => arg1 === arg2, 'foo', 'foo']
    ]).it('valid with a value:', (value, ...args) => {
        assert.isTrue(tryCatch(value, args));
    });

    forEach([
        [() => false],
        [arg => arg === 'foo', 'bar'],
        [() => {
            throw new Error('error');
        }]
    ]).it('invalid with a value:', (value, ...args) => {
        assert.isFalse(tryCatch(value, args));
    });
});
