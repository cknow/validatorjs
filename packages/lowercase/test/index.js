import { assert } from 'chai';
import { getTypes, stringTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import lowercase from '../src';

describe('Lowercase', () => {
    forEach([
        'foo',
        '123',
        '',
        ' ',
        '   '
    ]).it('valid with a value: %s', value => {
        assert.isTrue(lowercase(value));
    });

    forEach([
        'FOO',
        'Foo',
        ...getTypes(stringTypes)
    ]).it('invalid with a value: %s', value => {
        assert.isFalse(lowercase(value));
    });
});
