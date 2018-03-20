import { assert } from 'chai';
import { getTypes, intTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import intVal from '../src';

const intValTypes = [
    ...intTypes,
    '0',
    '-0',
    '1',
    '-1',
    '0.0',
    '-0.0',
    '1.0',
    '-1.0'
];

describe('IntVal', () => {
    forEach(intValTypes).it('valid with a value: %s', (value) => {
        assert.isTrue(intVal(value));
    });

    forEach(getTypes(intValTypes)).it('invalid with a value: %s', (value) => {
        assert.isFalse(intVal(value));
    });
});
