import { assert } from 'chai';
import { getTypes, regexpTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import regexpType from '../src';

describe('RegexpType', () => {
    forEach(regexpTypes).it('valid with a value: %s', value => {
        assert.isTrue(regexpType(value));
    });

    forEach(getTypes(regexpTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(regexpType(value));
    });
});
