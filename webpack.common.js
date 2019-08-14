const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('css/[name].fonts.css');
const extractSCSS = new ExtractTextPlugin('css/[name].styles.css');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const APP_DIR = path.join(__dirname, 'app');
const BUILD_DIR = path.join(__dirname, 'build');

module.exports = {
    entry: [APP_DIR + '/index.jsx'],
    devtool: 'inline-source-map',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss)$/,
        use: ['css-hot-loader'].concat(
          extractSCSS.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: { alias: { '../img': '../public/img' } },
              },
              {
                loader: 'postcss-loader',
                options: { plugins: [autoprefixer({ browsers: ['ie >= 10', 'last 4 version'] })] },
              },
              {
                loader: 'sass-loader',
              },
            ],
          }),
        ),
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './img/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: './fonts/[name].[hash].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    extractCSS,
    extractSCSS,
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
    new CopyWebpackPlugin([{ from: './public/img', to: 'img' }], { copyUnmodified: false }),
  ],
};
