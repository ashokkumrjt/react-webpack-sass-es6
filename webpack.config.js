const webpack = require( 'webpack' );
const LiveReloadPlugin = require( 'webpack-livereload-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' )
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'common': [
            './src/js/common.js'
        ],
        'home': [
            './src/js/home.js'
        ]
    },
    output: {
        filename: './dist/js/[name].js'
    },
    devtool: 'source-map', 
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },
    // https://webpack.js.org/plugins/
    plugins: [

        // https://github.com/statianzo/webpack-livereload-plugin
        new LiveReloadPlugin( { appendScriptTag: true } ),

        // https://webpack.github.io/docs/list-of-plugins.html#aggressivemergingplugin
        new webpack.optimize.AggressiveMergingPlugin(),

        new ExtractTextPlugin({
            filename: 'dist/styles/[name].css',
            allChunks: true
        }),

        new CleanWebpackPlugin(['dist'], {
            root: '/',
            verbose: true,
            dry: false,
            exclude: []
        })
    ]
}