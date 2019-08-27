const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: ['!dist/assets', 'dist/*']}),
        new HtmlWebpackPlugin({
            title: 'Ksenia Vasileva',
            template: 'source-index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'hands',
            filename: 'hands.html',
            template: 'source-hands.html'
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
