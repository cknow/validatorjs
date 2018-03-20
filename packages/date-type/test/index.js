import { assert } from 'chai';
import { getTypes, dateTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import dateType from '../src';

describe('DateType', () => {
    forEach(dateTypes).it('valid with a value: %s', (value) => {
        assert.isTrue(dateType(value));
    });

    forEach(getTypes(dateTypes)).it('invalid with a value: %s', (value) => {
        assert.isFalse(dateType(value));
    });
});
