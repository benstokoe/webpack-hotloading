module.exports = {
    entry: './js/app.js',
    output: {
        path: './dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.react.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
}
