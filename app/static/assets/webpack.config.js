var webpack = require("webpack");

module.exports = {
    // production mode
    mode: "production",
    // input file
    entry: "./main.js",
    // output file
    output: {
        // file name
        filename: "bundle.js",
        // complete path
        path: __dirname
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]

}