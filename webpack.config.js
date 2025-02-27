// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Obsługa obrazów
                type: 'asset/resource', // Zastępuje `file-loader`
            },
            {
                test: /\.css$/i, // Obsługa stylów
                use: ['style-loader', 'css-loader'],
            },

        ],
    },
    devServer: {
        static: './dist', // Serwer dla plików statycznych
    },
    mode: 'development', // Tryb: 'development' lub 'production'
};
