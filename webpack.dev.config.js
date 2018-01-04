import Config from 'webpack-config';
import path from 'path';

export default new Config().extend('webpack.base.config.js').merge({
    output: {
        publicPath: 'js',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public/'),
        openPage: './',
        historyApiFallback: true,
        port: 3001,
        inline: true,
        open: true
    }
});