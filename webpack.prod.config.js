import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('webpack.base.config.js').merge({
    output: {
        filename: 'bundle.min.js',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});