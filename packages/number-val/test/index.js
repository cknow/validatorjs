import { assert } from 'chai';
import { getTypes, numberValTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import numberVal from '../src';

describe('NumberVal', () => {
    forEach(numberValTypes).it('valid with a value: %s', value => {
        assert.isTrue(numberVal(value));
    });

    forEach(getTypes(numberValTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(numberVal(value));
    });
});
