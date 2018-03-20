import { assert } from 'chai';
import { getTypes, numberTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import numberVal from '../src';

const numberValTypes = [
    ...numberTypes,
    '0',
    '1',
    '1.0',
    '0.1',
    '1.1',
    '-1',
    '-1.0',
    '-0.1',
    '-1.1'
];

describe('NumberVal', () => {
    forEach(numberValTypes).it('valid with a value: %s', (value) => {
        assert.isTrue(numberVal(value));
    });

    forEach(getTypes(numberValTypes)).it('invalid with a value: %s', (value) => {
        assert.isFalse(numberVal(value));
    });
});
