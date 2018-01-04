import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public/js/')
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loaders: ['eslint-loader'],
                exclude: [/node_modules/],
            },
            {
                test: /\.js/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react', 'stage-0'],
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
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
        new ExtractTextPlugin('../css/styles.css')
    ]
};