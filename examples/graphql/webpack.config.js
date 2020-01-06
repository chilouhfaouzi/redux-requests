const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      react: path.join(__dirname, '..', 'node_modules', 'react'),
      'react-redux': path.join(
        __dirname,
        '..',
        'node_modules',
        'react-redux',
        'es',
      ),
      'redux-saga': path.join(__dirname, '..', 'node_modules', 'redux-saga'),
      'redux-saga-requests': path.join(
        __dirname,
        '..',
        '..',
        'packages',
        'redux-saga-requests',
        'es',
      ),
      'redux-saga-requests-react': path.join(
        __dirname,
        '..',
        '..',
        'packages',
        'redux-saga-requests-react',
        'es',
      ),
      'redux-saga-requests-graphql': path.join(
        __dirname,
        '..',
        '..',
        'packages',
        'redux-saga-requests-graphql',
        'es',
      ),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'eval-source-map',
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'index.html'),
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
};
