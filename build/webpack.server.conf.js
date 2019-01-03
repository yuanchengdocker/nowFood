const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const CopyWebpackPlugin = require('copy-webpack-plugin')
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
let nodeModules = {};
fs.readdirSync('node_modules')
    .filter((x) => {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach((mod) => {
        nodeModules[mod] = 'commonjs ' + mod;
    });
module.exports = {
    entry: ['webpack/hot/poll?1000','../server/app.js'],
    output: {
        path: path.resolve(__dirname, '../dist_server'),
        filename: 'server.js'
    },
    target: 'node',
    context: __dirname,
    node: {
        __filename: false,
        __dirname: false
    },
    // externals: nodeModules,
    module: {
        loaders: [
        {
            test: /\.(js)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: [resolve('server')],
            options: {
                formatter: require('eslint-friendly-formatter')
            }
        },    
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [
                path.resolve(__dirname, "../node_modules"),
            ],
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'stage-2'],
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new CopyWebpackPlugin([
        //     // {output}/to/file.txt
        //     { from: path.resolve(__dirname, '../server/package.json'), to: path.resolve(__dirname, '../dist_server') },
        //     { from: path.resolve(__dirname, '../server/start.sh'), to: path.resolve(__dirname, '../dist_server') }
        // ])
    ]
}
