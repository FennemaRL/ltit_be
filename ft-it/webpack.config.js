const path = require('path');
const HTMLWebpackPLugin= require ('html-webpack-plugin');
module.exports = {
    entry: './src/index.ts',
    output: {
        filename : 'bundle.js',
        path: path.join(__dirname,'/dist')
    },
    plugins: [
        new HTMLWebpackPLugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', '@babel/preset-react'
                        ]
                    }
                },
                resolve: {
                    extensions :['.js','.jsx', '.ts','.tsx']
                }
            }
        ]
    },
    
}