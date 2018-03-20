import { assert } from 'chai';
import { getTypes, symbolTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import symbolType from '../src';

describe('SymbolType', () => {
    forEach(symbolTypes).it('valid with a value: %s', (value) => {
        assert.isTrue(symbolType(value));
    });

    forEach(getTypes(symbolTypes)).it('invalid with a value: %s', (value) => {
        assert.isFalse(symbolType(value));
    });
});
