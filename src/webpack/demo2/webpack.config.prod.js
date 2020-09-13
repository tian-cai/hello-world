const merge = require('webpack-merge');
const webpack = require("webpack");
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const cleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const base = require("./webpack.config.base");
const fs = require('fs')
const path = require('path')

function loadDllAssets() {
  return fs
    .readdirSync(path.resolve(__dirname, './dll'))
    .filter(filename => filename.match(/.dll.js$/))
    .map(filename => `../dll/${filename}`);
}

module.exports = merge(base, {
    mode: "production",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[contenthash].js"
    },
    plugins: [
        new cleanWebpackPlugin("build/*"),
        new HtmlWebpackTagsPlugin({
            append: false,
            scripts: loadDllAssets()
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
        new webpack.DllReferencePlugin({
            manifest: require("./dll/react.manifest.json")
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
})