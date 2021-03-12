const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require ('webpack');
const path = require ('path');
const { resolve } = require('path')
module.exports = {
    entry :'./src/index.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js'],
    },
    devServer: {
		hot: true,
		open: true
	},
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'ejemplo',
        }),
        new CopyWebpackPlugin({
            patterns: 
            [
                {
                    from: './src/styles/styles.css',
                    to: ''
                } 
            ],      
        }),
    ]
}
