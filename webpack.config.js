/* global __dirname */
var path = require('path');

var config = {
    context: __dirname,
    entry: {
        'bundle': ['./src/index.js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: './[name].js',
    },
    module: {
        noParse: [],
        loaders: []
    },
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};

module.exports = config;