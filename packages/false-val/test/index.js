import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import falseVal from '../src';

const falseValTypes = [
    0,
    false,
    'off',
    'no',
    'n',
    '0',
    'false',
    ''
];

describe('FalseVal', () => {
    forEach(falseValTypes).it('valid with a value: %s', (value) => {
        assert.isTrue(falseVal(value));
    });

    forEach(getTypes(falseValTypes)).it('invalid with a value: %s', (value) => {
        assert.isFalse(falseVal(value));
    });
});
