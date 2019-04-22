module.exports = env => {
    console.log("mode = " + env.mode)
    return {
        mode: env.mode,
        devtool: (env.mode === "development") ? "source-map": "",
        entry: './src/app.ts',
        output: {
            filename: 'bundle.js',
            path: __dirname + "/dist"
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpe?g)$/,
                    use: (env.mode === "development") ? 
                        [{
                            loader: "file-loader",
                            options: {
                                outputPath: "img",
                            }
                        }]
                        : "base64-inline-loader"
                },
                {
                    test: /\.txt$/,
                    use: "raw-loader"
                },
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"]
        }
    }
};