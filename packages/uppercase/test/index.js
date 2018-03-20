import { assert } from 'chai';
import { getTypes, stringTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import uppercase from '../src';

describe('Uppercase', () => {
    forEach([
        'FOO',
        '123',
        '',
        ' ',
        '   '
    ]).it('valid with a value: %s', (value) => {
        assert.isTrue(uppercase(value));
    });

    forEach([
        'foo',
        'Foo',
        ...getTypes(stringTypes)
    ]).it('invalid with a value: %s', (value) => {
        assert.isFalse(uppercase(value));
    });
});
