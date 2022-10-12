const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: ['./src/index.js', './src/styles/style.less'],
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {loader: MiniCSSExtractPlugin.loader},
                    'css-loader',
                    'less-loader'
                ]
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 3001,
        // hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new MiniCSSExtractPlugin({filename: 'styles.css'}),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './image-questions', 
                    to: 'assets'
                } 
            ]
        }), 
    ]
}