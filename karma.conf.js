var webpack = require("webpack");

module.exports = function (config) {
    config.set({
        browsers: ["Chrome"], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: ["mocha", "chai"],
        files: [
            "node_modules/babel-polyfill/dist/polyfill.js",
            "src/**/*.jsx",
            "test/**/*.jsx",
            "tests.webpack.js" //just load this file
        ],
        plugins: [
            "karma-chrome-launcher",
            "karma-chai",
            "karma-mocha",
            "karma-sourcemap-loader",
            "karma-webpack",
            "karma-coverage",
            "karma-mocha-reporter",
            "karma-spec-reporter",
            "karma-babel-preprocessor",
            "karma-commonjs"
        ],
        babelPreprocessor: {
            options: {
                "presets": ["es2015"],
                "plugins": ["transform-es2015-modules-umd"]
            }
        },
        preprocessors: {
            "./src/**/*.jsx": ["babel", "commonjs", "coverage", "sourcemap"],
            "./test/**/*.jsx": ["babel", "commonjs"],
            "tests.webpack.js": ["webpack", "sourcemap"]
        },
        reporters: ["spec", "coverage"], //report results in this format
        webpack: {
            devtool: "inline-source-map",
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
            noInfo: false
        },
        coverageReporter: {
            reporters: [{type: "json", file: "coverage.json"}, {type: "lcov"}, {type: "text"}],
            dir: "coverage"
        },
        externals: {
            "react/addons": true,
            "react/lib/ExecutionEnvironment": true,
            "react/lib/ReactContext": true
        }
    });
};