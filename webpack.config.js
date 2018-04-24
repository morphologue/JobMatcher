const path = require('path');

module.exports = function (env, argv) {
    return {
        entry: './Views/Home/Index.ts',
        output: {
            path: path.resolve(__dirname, "wwwroot"),
            filename: 'Index.js'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader'
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },
        devtool: argv.mode === 'development' ? 'source-map' : false
    }
}
