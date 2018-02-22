import { assert } from 'chai';
import forEach from 'mocha-each';
import regexpVal from '../src';

describe('RegexpVal', () => {
    forEach([
        '[a-z]',
        /^/
    ]).it('valid with a value: %s', value => {
        assert.isTrue(regexpVal(value));
    });

    forEach([
        '*'
    ]).it('invalid with a value: %s', value => {
        assert.isFalse(regexpVal(value));
    });
});
