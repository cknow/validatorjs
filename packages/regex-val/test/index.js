import { assert } from 'chai';
import forEach from 'mocha-each';
import regexVal from '../src';

describe('RegexVal', () => {
    forEach([
        '[a-z]',
        /^/
    ]).it('valid with a value: %s', (value) => {
        assert.isTrue(regexVal(value));
    });

    forEach([
        '*'
    ]).it('invalid with a value: %s', (value) => {
        assert.isFalse(regexVal(value));
    });
});
