const { LoaderOptionsPlugin } = require('webpack');
const { merge: webpackMerge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base');

module.exports = webpackMerge(baseConfig, {
    devtool: false,
    output: {
        clean: true,
        filename: `[name].[contenthash].js`,
    },
    target: 'web',
    optimization: {
        minimize: false
    },
    plugins: [
        new LoaderOptionsPlugin({ minimize: true }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: true,
        }),
    ],
});
