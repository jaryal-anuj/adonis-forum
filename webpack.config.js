const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry:[
        './resources/styles/app.scss',
    ],
    output:{
        filename:'app.js',
        path: path.resolve(__dirname, 'public')
    },
    module:{
        rules:[
            {
                test:/\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({filename: 'app.css',}),
    ]
}