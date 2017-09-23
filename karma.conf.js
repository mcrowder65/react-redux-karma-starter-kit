var webpack = require("webpack");

module.exports = function (config) {
    config.set({
        browsers: ["Chrome"], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: ["mocha", "chai"], //use the mocha test framework
        files: [
            "src/client/actions/index.jsx",
            "tests.webpack.js" //just load this file
        ],
        plugins: [
            "karma-chrome-launcher",
            "karma-chai",
            "karma-mocha",
            "karma-sourcemap-loader",
            "karma-webpack",
            "karma-coverage",
            "karma-mocha-reporter"
        ],
        preprocessors: {
            "src/client/actions/index.jsx": ["webpack", "sourcemap", "coverage"],
            "tests.webpack.js":
                ["webpack", "sourcemap", "coverage"]
        },
        reporters: ["mocha", "progress", "coverage"], //report results in this format
        webpack: { //kind of a copy of your webpack config
            devtool: "inline-source-map", //just do inline source maps instead of the default
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                },
                    {
                        test: /\.jsx$/,
                        loader: "babel-loader",
                        exclude: /node_modules/
                    },
                    {
                        test: /\.css$/,
                        loader: "style-loader!css-loader"
                    }]
            },
            resolve: {
                extensions: [".js", ".jsx"]
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },
        coverageReporter: {
            type: "html", //produces a html document after code is run
            dir: "coverage/" //path to created html doc
        }
    });
};