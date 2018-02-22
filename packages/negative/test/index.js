import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import negative from '../src';

export const negativeTypes = [
    Number(-1),
    Number(-1.0),
    Number(-0.1),
    Number(-1.1),
    -1,
    -1.0,
    -0.1,
    -1.1,
    '-1',
    '-1.0',
    '-0.1',
    '-1.1'
];

describe('Negative', () => {
    forEach(negativeTypes).it('valid with a value: %s', value => {
        assert.isTrue(negative(value));
    });

    forEach(getTypes(negativeTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(negative(value));
    });
});
