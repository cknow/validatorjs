import { assert } from 'chai';
import { getTypes, numberTypes, stringTypes, symbolTypes, undefinedTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import symbolVal from '../src';

const symbolValTypes = [
    ...numberTypes,
    ...stringTypes,
    ...symbolTypes,
    ...undefinedTypes
];

describe('SymbolVal', () => {
    forEach(symbolValTypes).it('valid with a value: %s', value => {
        assert.isTrue(symbolVal(value));
    });

    forEach(getTypes(symbolValTypes)).it('invalid with a value: %s', value => {
        assert.isFalse(symbolVal(value));
    });
});
