module.exports = {
    extends: [
        '@cknow/eslint-config/esnext',
        '@cknow/eslint-config/plugins/mocha'
    ],
    rules: {
        'mocha/no-mocha-arrows': 'off'
    }
};
