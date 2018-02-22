import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import positive from '../src';

const positiveTypes = [
    Number(1),
    Number(1.0),
    Number(0.1),
    Number(1.1),
    1,
    1.0,
    0.1,
    1.1,
    '1',
    '1.0',
    '0.1',
    '1.1'
];

describe('Positive', () => {
    forEach(positiveTypes).it('valid with a value: %s', value => {
        assert.isTrue(positive(value));
    });

    forEach(getTypes(positiveTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(positive(value));
    });
});
