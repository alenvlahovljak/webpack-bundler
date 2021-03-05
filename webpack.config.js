const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: ['source-map-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000
    }
}
