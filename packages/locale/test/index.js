import { assert } from 'chai';
import { getTypes } from '@validatorjs/test';
import forEach from 'mocha-each';
import locale from '../src';

describe('Locale', () => {
    forEach([
        'en_US',
        'pt_BR',
        'fr_FR'
    ]).it('valid with a value: %s', value => {
        assert.isTrue(locale(value));
    });

    forEach(getTypes()).it('invalid with a value: %s', value => {
        assert.isFalse(locale(value));
    });
});
