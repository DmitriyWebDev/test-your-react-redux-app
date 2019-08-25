const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const BUILD_DIR = path.join(__dirname, '../../../target/classes/static');

const host = process.env.HOST || 'http://localhost:3001';

module.exports = merge(common, {
  devtool: 'sourcemap',
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 5001,
    proxy: [
      {
        target: host,
        secure: false,
        changeOrigin: true,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: 'dev',
    }),
  ],
});
