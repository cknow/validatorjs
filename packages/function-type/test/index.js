import { assert } from 'chai';
import { getTypes, functionTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import functionType from '../src';

describe('FunctionType', () => {
    forEach(functionTypes).it('valid with a value: %s', value => {
        assert.isTrue(functionType(value));
    });

    forEach(getTypes(functionTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(functionType(value));
    });
});
