const path = require('path');
const HWP = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            // {
            //     test: /\.html$/i,
            //     loader: 'html-loader',
            // },
        ],
    },
    plugins: [
        new HWP(
            { template: path.join(__dirname, "/dist/index.html") }
        )
    ]
};