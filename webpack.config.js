const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ]
}