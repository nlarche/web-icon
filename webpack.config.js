/* global __dirname */
var path = require('path');

var config = {
    devtool : 'source-map',
    context: __dirname,
    entry: {
        'bundle': ['./src/index.js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: './[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
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

// Producition mode react
// new webpack.DefinePlugin({
//   "process.env": {
//     NODE_ENV: JSON.stringify("production")
//   }
// });

module.exports = config;