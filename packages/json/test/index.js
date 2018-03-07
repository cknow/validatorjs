import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import json from '../src';

describe('Json', () => {
    forEach([
        '{"foo":"bar"}',
        JSON.stringify([]),
        JSON.stringify({}),
        JSON.stringify(['foo']),
        JSON.stringify({ foo: 'bar' })
    ]).it('valid with a value: %s', value => {
        assert.isTrue(json(value));
    });

    forEach(getTypes()).it('invalid with a value: %s', value => {
        assert.isFalse(json(value));
    });
});
