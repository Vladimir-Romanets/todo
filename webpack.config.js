const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public/js/')
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['env', 'react', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: '../index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('css/styles.css')
    ]
};