const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /.css$/i,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1, url: false } }],
      },
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        use: [
          {
            loader: 'imports-loader',
            options: {
              imports: ['jQuery=jquery'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'bootstrap-sass-loader',
            options: {
              configFilePath: './bootstrap.config.js',
            },
          },
        ],
      },
      {
        test: /bootstrap.js$/,
        use: [
          {
            loader: 'imports-loader',
            options: { imports: ['jQuery=jquery', '$=jquery', 'this=>window'] },
          },
        ],
      },
    ],
  },

  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true,
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/BOOTSTRA.384/js', to: 'BOOTSTRA.384/js/[name][ext]' },
        { from: 'public/BOOTSTRA.384/css', to: 'BOOTSTRA.384/css/[name][ext]' },
        { from: 'public/imgs', to: 'imgs' },
        { from: 'public/resume', to: 'resume' },
        { from: 'public/favicon.ico', to: '[name][ext]' },
      ],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: 'bundle-report.json',
    }),
  ],
};
