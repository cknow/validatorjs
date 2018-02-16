const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'float-type': [path.resolve(__dirname, 'packages/float-type/float-type.js')],
        'float-type.min': [path.resolve(__dirname, 'packages/float-type/float-type.js')]
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    node: {
        fs: 'empty'
    }
};
