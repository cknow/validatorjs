import { assert } from 'chai';
import forEach from 'mocha-each';
import search from '../src';

describe('Search', () => {
    forEach([
        [undefined, undefined],
        ['foo', ['FOO', 'bar']],
        ['FOO', ['FOO', 'bar'], true],
        ['FOO', ['FOObar', 'bar'], false, true],
        ['foo', 'foo'],
        ['foo', 'foo', true],
        ['f', 'foo', false, true],
        [{ foo: 'bar' }, { foo: 'bar' }]
    ]).it('valid "%2$s" with a value: %1$s', (value, searcher, identical = false, contains = false) => {
        assert.isTrue(search(value, searcher === undefined ? undefined : [searcher, identical, contains]));
    });

    forEach([
        ['foo', undefined],
        ['foo', ['foobar', 'bar']],
        ['foo', ['FOO', 'bar'], true],
        ['foo', ['bar', 'fozbar'], false, true],
        ['foo', [{}]],
        ['10', 10, true],
        [10, '10', true],
        [{ foo: 'bar' }, { bar: 'foo' }]
    ]).it('invalid "%2$s" with a value: %1$s', (value, searcher, identical = false, contains = false) => {
        assert.isFalse(search(value, searcher === undefined ? undefined : [searcher, identical, contains]));
    });
});
