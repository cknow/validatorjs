import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import trueVal from '../src';

const trueValTypes = [
    1,
    true,
    'on',
    'yes',
    'y',
    's',
    '1',
    'true'
];

describe('TrueVal', () => {
    forEach(trueValTypes).it('valid with a value: %s', (value) => {
        assert.isTrue(trueVal(value));
    });

    forEach(getTypes(trueValTypes)).it('invalid with a value: %s', (value) => {
        assert.isFalse(trueVal(value));
    });
});
