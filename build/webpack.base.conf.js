const path = require('path');
// 변수로 저장
const projectDir = path.resolve(__dirname, '../project');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
  entry: path.resolve(projectDir, 'src'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|gif|jpg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images/'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(projectDir, 'html/index.html'),
      filename: 'index.html',
      inject: true,
    }),
  ],
};