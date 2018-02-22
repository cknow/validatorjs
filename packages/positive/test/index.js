import { assert } from 'chai';
import { getTypes, positiveTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import positive from '../src';

describe('Positive', () => {
    forEach(positiveTypes).it('valid with a value: %s', value => {
        assert.isTrue(positive(value));
    });

    forEach(getTypes(positiveTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(positive(value));
    });
});
