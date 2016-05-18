var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');

const baseConfig = require('./base');

var configPath = path.join(__dirname, '/..');

var config = _.merge({
    entry: './src/index.js',
    cache: true,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}, baseConfig);

config.resolve.alias =  {
    api: path.join(configPath + '/front.config.development')
};

config.module.loaders.push({
    test: /\.jsx?$/,
    exclude: [/node_modules/, /bower_components/],
    loader: 'react-hot'
});

config.module.loaders.push({
    test: /\.jsx?$/,
    exclude: [/node_modules/, /bower_components/],
    loader: 'babel-loader',
    query: {
        presets: ['react', 'es2015']
    }
});

module.exports = config;
