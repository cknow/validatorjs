import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import booleanVal from '../src';

const booleanValTypes = [
    0,
    false,
    'off',
    'no',
    'n',
    '0',
    'false',
    '',
    1,
    true,
    'on',
    'yes',
    'y',
    's',
    '1',
    'true'
];

describe('BooleanVal', () => {
    forEach(booleanValTypes).it('valid with a value: %s', (value) => {
        assert.isTrue(booleanVal(value));
    });

    forEach(getTypes(booleanValTypes)).it('invalid with a value: %s', (value) => {
        assert.isFalse(booleanVal(value));
    });
});
