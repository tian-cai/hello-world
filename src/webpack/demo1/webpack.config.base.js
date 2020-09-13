let htmlWebpackPlugin = require("html-webpack-plugin");
let path = require('path')

let base = {
  entry: {
    main: __dirname + "/src/index.js",
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "src/index.html",
      title: "My React"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/i,
        use: ["file-loader?name=[name]-[hash].[ext]"],
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader?name=[name]-[hash].[ext]"],
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.(jsx|js)$/,
        use: ["babel-loader?cacheDirectory=true"],
        include: path.resolve(__dirname, "src")
      }
    ]
  },
  externals: {
    // key是我们 import 的包名，value 是CDN为我们提供的全局变量名
    // 所以最后 webpack 会把一个静态资源编译成：module.export.react = window.React
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouterDOM"
  }

};
module.exports = base;