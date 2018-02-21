const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/')
    },
    watch:true,
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use:'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules:true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            modules :true
                        }
                    }
                ]
            }
      ]
    },
    devtool: "source-map"
};