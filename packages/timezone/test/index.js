import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import timezone from '../src';

describe('Timezone', () => {
    forEach([
        'America/Sao_Paulo',
        'US/Central',
        'Europe/Paris',
        'UTC'
    ]).it('valid with a value: %s', value => {
        assert.isTrue(timezone(value));
    });

    forEach(getTypes()).it('invalid with a value: %s', value => {
        assert.isFalse(timezone(value));
    });
});
