import Config from 'webpack-config';
import path from 'path';

export default new Config().extend('webpack.base.config.js').merge({
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public/'),
        openPage: './',
        historyApiFallback: true,
        port: 3001,
        open: true,
        inline: true
    }
});