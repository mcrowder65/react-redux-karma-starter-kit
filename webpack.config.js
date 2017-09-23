const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./src/client/index.html",
    filename: "./index.html",
    inject: "body"
});
module.exports = {
    cache: true,
    devtool: "sourcemap",
    entry: "./src/client/app.jsx",
    output: {
        path: `${__dirname}/build`,
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.jsx$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [HtmlWebpackPluginConfig]

};
