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
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    }
  };