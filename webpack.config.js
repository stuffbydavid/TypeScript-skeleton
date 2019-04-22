module.exports = env => {
    console.log("mode = " + env.mode)
    return {
        mode: env.mode,
        devtool: (env.mode === "development") ? "source-map": "",
        entry: './src/app.ts',
        output: {
            filename: 'bundle.js',
            path: __dirname
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"]
        }
    }
};