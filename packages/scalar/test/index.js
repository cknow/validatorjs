import { assert } from 'chai';
import { getTypes, booleanTypes, numberTypes, stringTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import scalar from '../src';

const scalarTypes = [
    ...booleanTypes,
    ...numberTypes,
    ...stringTypes
];

describe('Scalar', () => {
    forEach(scalarTypes).it('valid with a value: %s', (value) => {
        assert.isTrue(scalar(value));
    });

    forEach(getTypes(scalarTypes)).it('invalid with a value: %s', (value) => {
        assert.isFalse(scalar(value));
    });
});
