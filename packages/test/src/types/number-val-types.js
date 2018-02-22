import { positiveTypes } from './positive-types';
import { negativeTypes } from './negative-types';
import { numberTypes } from './number-types';

export const numberValTypes = [
    ...positiveTypes,
    ...negativeTypes,
    ...numberTypes,
    '0'
];
