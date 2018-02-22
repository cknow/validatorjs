export const arrayTypes = [
    [],
    [1, 2, 3],
    ['foo', 'bar', 'foobar'],

    /* eslint-disable-next-line */
    new Array(),
    new Array([1, 2, 3]),
    new Array(['foo', 'bar', 'foobar'])
].map(value => [value]);
