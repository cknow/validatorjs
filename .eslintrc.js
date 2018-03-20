module.exports = {
    extends: [
        '@cknow/eslint-config/esnext',
        '@cknow/eslint-config/plugins/mocha',
        '@cknow/eslint-config/plugins/node'
    ],
    rules: {
        'arrow-parens': ['error', 'always'],
        'max-lines': 'off',
        'mocha/no-mocha-arrows': 'off',

        'node/no-extraneous-import': 'off',
        'node/no-extraneous-require': 'off',
        'node/no-unsupported-features': 'off'
    }
};
