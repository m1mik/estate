const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const { mode: isProdMode } = argv;
  const rest = {};
  if (!isProdMode) {
    rest.devtool = 'inline-source-map';
  }

  return {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|json)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
    mode: isProdMode || 'development',
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify({ DEV_MODE: !isProdMode }),
      }),
    ],
    devServer: {
      // contentBase: path.join(__dirname, 'build'),
      compress: true,
      hot: true,
      port: 3000,
      historyApiFallback: true,
    },
  };
};
