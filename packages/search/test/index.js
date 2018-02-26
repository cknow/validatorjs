import { assert } from 'chai';
import forEach from 'mocha-each';
import search from '../src';

describe('Search', () => {
    forEach([
        ['foo', ['FOO', 'bar']],
        ['FOO', ['FOO', 'bar'], true],
        ['FOO', ['FOObar', 'bar'], false, true],
        [null, null],
        ['foo', 'foo', true],
        ['f', 'foo', false, true]
    ]).it('valid with a value: %s', (value, searcher, identical = false, contains = false) => {
        assert.isTrue(search(value, [searcher, identical, contains]));
    });

    forEach([
        ['foo', ['foobar', 'bar']],
        ['foo', ['FOO', 'bar'], true],
        ['foo', ['bar', 'fozbar'], false, true],
        ['foo', [{}]],
        ['foo', 0, true]
    ]).it('invalid with a value: %s', (value, searcher, identical = false, contains = false) => {
        assert.isFalse(search(value, [searcher, identical, contains]));
    });

    forEach([
        ['foo']
    ]).it('invalid empty searcher with a value: %s', value => {
        assert.isFalse(search(value));
    });
});
