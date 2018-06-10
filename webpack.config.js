const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/past-events.html',
      filename: 'past-events.html',
      title: 'Past Events',
    })
  ]
};