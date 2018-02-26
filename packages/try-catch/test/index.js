import { assert } from 'chai';
import forEach from 'mocha-each';
import tryCatch from '../src';

describe('TryCatch', () => {
    forEach([
        [() => true],
        [arg => arg === 'foo', 'foo'],
        [(arg1, arg2) => arg1 === arg2, 'foo', 'foo']
    ]).it('valid', (value, ...args) => {
        assert.isTrue(tryCatch(value, args.length > 0 ? args : undefined));
    });

    forEach([
        [() => false],
        [arg => arg === 'foo', 'bar'],
        [() => {
            throw new Error('error');
        }]
    ]).it('invalid', (value, ...args) => {
        assert.isFalse(tryCatch(value, args.length > 0 ? args : undefined));
    });
});
