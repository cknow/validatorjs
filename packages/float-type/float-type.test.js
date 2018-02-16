import { assert } from 'chai';
import forEach from 'mocha-each';
import floatType from './float-type';

describe('FloatType', () => {
    forEach([
        Number(-0.1),
        Number(0.1),
        Number(-1.1),
        Number(1.1),
        -0.1,
        0.1,
        -1.1,
        1.1
    ]).it('valid with a value: %s', value => {
        assert.isTrue(floatType(value));
    });

    forEach([
        Number(),
        Number(-0),
        Number(0),
        Number(-1),
        Number(1),
        Number(-0.0),
        Number(0.0),
        Number(-1.0),
        Number(1.0),
        Boolean(),
        String(),
        null,
        undefined,
        true,
        false,
        'true',
        'false',
        '-1.1',
        '1.1',
        '1',
        '-1',
        '0',
        ' ',
        '   ',
        0,
        -0,
        1,
        -1,
        0.0,
        -0.0,
        1.0,
        -1.0,
        [],
        {},
        new Array('foo'),
        {
            foo: 'bar'
        }
    ]).it('invalid with a value: %s', value => {
        assert.isFalse(floatType(value));
    });
});
