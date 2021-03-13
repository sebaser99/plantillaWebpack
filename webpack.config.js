const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require ('webpack');
const path = require ('path');
const { resolve } = require('path')
module.exports = {
    entry :'./src/index.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
		hot: true,
		open: true,
        port: 3000
	},
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
           {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]

           }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'ejemplo',
        })
       
    ]
}
