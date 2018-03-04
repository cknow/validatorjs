import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import tld from '../src';

const tldTypes = [
    'bar',
    'foo',
    'com',
    'br'
];

describe('Tld', () => {
    forEach(tldTypes).it('valid with a value: %s', value => {
        assert.isTrue(tld(value));
    });

    forEach(getTypes(tldTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(tld(value));
    });
});
