const path = require('path');
const webpack = require('webpack');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const BASE_URL = {
    development: 'http://localhost:8000'
}

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}

if (env === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false,
            },
            output: {
                comments: false,
            },
            sourceMap: false,
        })
    );
}
