import { assert } from 'chai';
import { getTypes, arrayTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import unique from '../src';

describe('Unique', () => {
    forEach([
        [[]],
        [[1, 2, 3]],
        [[true, false]],
        [['alpha', 'beta', 'gamma', 'delta']],
        [[0, 2.71, 3.14]],
        [[[], ['str'], [1]]],
        [[{ key: 'value' }, { otherKey: 'value' }]]
    ]).it('valid with a value: %s', value => {
        assert.isTrue(unique(value));
    });

    forEach([
        [[1, 2, 2, 3]],
        [[1, 2, 3, 1]],
        [[true, false, false]],
        [['alpha', 'beta', 'gamma', 'delta', 'beta']],
        [[0, 3.14, 2.71, 3.14]],
        [[[], [1], [1]]],
        [[{ key: 'value' }, { key: 'value' }]],
        ...getTypes(arrayTypes)
    ]).it('invalid with a value: %s', value => {
        assert.isFalse(unique(value));
    });
});
