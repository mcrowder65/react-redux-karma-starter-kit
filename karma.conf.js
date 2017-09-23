var webpack = require("webpack");
module.exports = function (config) {
    config.set({
        browsers: ["Chrome"],
        singleRun: false,
        frameworks: ["mocha", "chai"],
        files: [
            "tests.webpack.js"
        ],
        preprocessors: {
            "tests.webpack.js": ["webpack", "sourcemap"]
        },
        reporters: ["spec", "coverage"],
        webpack: {
            resolve: {
                extensions: [".js", ".jsx"]
            },
            module: {
                loaders: [{
                    test: /\.jsx$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                }]
            }
        },
        webpackServer: {
            noInfo: false
        }
    });
};