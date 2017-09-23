var webpack = require("webpack");

module.exports = function (config) {
    config.set({
        browsers: ["Chrome"],
        singleRun: true,
        frameworks: ["mocha", "chai"],
        files: [
            "tests.webpack.js"
        ],
        preprocessors: {
            "tests.webpack.js": ["webpack", "sourcemap"]
        },
        reporters: ["spec", "coverage"],
        webpack: {
            devtool: "inline-source-map",
            module: {
                loaders: [
                    {test: /\.jsx$/, loader: "babel-loader"}
                ],
                rules: [
                    // instrument only testing sources with Istanbul
                    {
                        test: /\.js$|\.jsx$/,
                        use: {
                            loader: "istanbul-instrumenter-loader",
                            options: {esModules: true}
                        },
                        enforce: "post",
                        exclude: /node_modules|\.spec\.js$/
                    }
                ]
            },
            resolve: {
                extensions: [".js", ".jsx"]
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};