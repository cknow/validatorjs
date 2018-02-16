module.exports = {
    extends: [
        '@cknow/eslint-config/esnext',
        '@cknow/eslint-config/plugins/mocha'
    ],
    rules: {
        'require-jsdoc': 'off',
        'mocha/no-mocha-arrows': 'off'
    }
};
