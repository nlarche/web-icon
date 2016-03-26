/* global __dirname */
var path = require('path');

var production = process.env.NODE_ENV === 'production';

var config = {
    devtool: 'source-map',
    context: __dirname,
    entry: {
        'bundle': ['./src/index.js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: './web-icon.js',
        library: 'webIcon',
        libraryTarget: 'umd',
        externals: {
            'react': 'react',
            'react-dom': 'react-dom'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};

if (production) {
    var webpack = require('webpack');
    // production mode react
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    });
} else {
    config.entry.bundle.push('./public/index.js');

}

module.exports = config;
