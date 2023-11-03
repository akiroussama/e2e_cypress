// cypress/plugins/index.js
const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
    const options = {
        webpackOptions: {
            resolve: {
                extensions: ['.ts', '.tsx', '.js']
            },
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript'
                            ],
                        },
                    },
                ],
            },
        },
    };

    on('file:preprocessor', webpack(options));
};
