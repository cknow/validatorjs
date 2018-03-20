import { assert } from 'chai';
import { getTypes, regexTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import regexType from '../src';

describe('RegexType', () => {
    forEach(regexTypes).it('valid with a value: %s', (value) => {
        assert.isTrue(regexType(value));
    });

    forEach(getTypes(regexTypes)).it('invalid with a value: %s', (value) => {
        assert.isFalse(regexType(value));
    });
});
