var webpack = require("webpack");

module.exports = function (config) {
    config.set({
        browsers: ["Chrome"],
        singleRun: true,
        autoWatch: false,
        frameworks: ["mocha", "chai"],
        files: [
            "tests.webpack.js"
        ],
        preprocessors: {
            "test/**/*.jsx": "coverage",
            "tests.webpack.js": ["webpack", "sourcemap"]
        },
        reporters: ["spec", "coverage"],
        webpack: {
            entry: "./tests.webpack.js",
            resolve: {
                extensions: [".js", ".jsx"]
            },
            module: {
                loaders: [{
                    test: /\.jsx$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                }, {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                }]
            }
        },
        coverageReporter: {
            reporters: [
                {type: "json", file: "coverage.json"},
                {type: "lcov"},
                {type: "text"}
            ],
            dir: "./coverage/client"
        },
        webpackServer: {
            noInfo: false
        }
    });
};