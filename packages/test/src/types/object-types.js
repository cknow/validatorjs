export const objectTypes = [
    {},
    { foo: 'bar' },

    /* eslint-disable-next-line */
    new Object({}),

    /* eslint-disable-next-line */
    new Object({ foo: 'bar' })
];
