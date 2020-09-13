const webpack = require("webpack");

const dll = {
  entry: {
    react: ["react", "react-dom", "react-router-dom"]
  },
  output: {
    path: __dirname + "/dll",
    filename: "[name]-dll.js",
    library: "[name]_dll"
  },
  plugins: [
    new webpack.DllPlugin({
        name: "[name]_dll",
        path: __dirname + "/dll/" + "[name].manifest.json",
    })
  ],
  mode: "production",
};
module.exports = dll;