require('dotenv').config();
const { DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const { resolve } = require('./util');

const autoprefixer = require('autoprefixer');
const isProd = process.env.NODE_ENV === 'production';
const cssSourceMap = isProd;

module.exports = {
    entry: { app: resolve('src') },
    mode: isProd ? 'production' : 'development',
    output: {
        path: resolve('dist'),
        publicPath: '/',
    },
    performance: { hints: false },
    stats: {
        assets: false,
        modules: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    resolve('src'),
                    !isProd && resolve('node_modules/webpack-dev-server/client')
                ].filter(Boolean),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.vue$/,
                include: resolve('src'),
                use: [{
                    loader: 'vue-loader',
                }],
            },
            {
                test: /\.scss$/,
                include: [
                    resolve('src'),
                ],
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: cssSourceMap,
                            importLoaders: 1 ,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: cssSourceMap },
                    },
                ].filter(Boolean)
            },
            {
                test: /\.css$/,
                include: [resolve('src')],
                use: ['vue-style-loader', 'css-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    plugins: [
        new VueLoaderPlugin(),
        new DefinePlugin({
            // Add more variables here and webpack will replace them with their values
            // during build time
            __DEV__: process.env.NODE_ENV === 'development',
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: resolve('src/index.html'),
            inject: 'body',
        }),
        autoprefixer,
    ]
};
