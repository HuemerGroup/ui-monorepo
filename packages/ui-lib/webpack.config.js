const path = require("path");

const stylesIncludePath = path.resolve(__dirname);

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                include: stylesIncludePath
            },
            {
                test: /\.css$/,
                loaders: [
                    "style-loader",
                    "css-loader"
                ],
                include: stylesIncludePath
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [
                    /node_modules\//
                ]
            },
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, "./src"),
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpe?g)$/,
                loader: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: [
            ".tsx",
            ".ts",
            ".js"
        ]
    },
    output: {
        filename: "index.js",
        library: ["my-org", "ui-lib"],
        libraryTarget: "umd",
        path: path.resolve(__dirname, "./build")
    }
};