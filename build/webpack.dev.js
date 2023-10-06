const { merge: webpackMerge } = require('webpack-merge');

const baseConfig = require('./webpack.base');
const { resolve } = require('./util');

module.exports = webpackMerge(baseConfig, {
    watchOptions: {
        ignored: /node_modules/,
    },
    entry: resolve('src', 'main.js'),
    output: {
        filename: '[name].[contenthash].dev.js',
        clean: true,
    },
    optimization: {
        moduleIds: 'named',
        emitOnErrors: false,
        providedExports: true,
        usedExports: true,
        removeEmptyChunks: false,
        removeAvailableModules: false,
    },
    devtool: 'inline-cheap-source-map',
    devServer: {
        hot: true,
        host: '0.0.0.0',
        port: process.env.DEV_SERVER_PORT || 9000,
        static: resolve('dist'),
        client: {
            logging: 'warn',
            overlay: false,
        },
        compress: false,
    },
});
