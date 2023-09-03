const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'routes/hello/index': './src/routes/hello/index.ts',
    'routes/index/index': './src/routes/index/index.ts',
    'events/onTestMessage/index': './src/routes/index/index.ts',
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/routes/hello/package.json',
          to: 'routes/hello/package.json',
        },
        {
          from: 'src/routes/index/package.json',
          to: 'routes/index/package.json',
        },
        {
          from: 'src/routes/index/package.json',
          to: 'routes/index/package.json',
        },
      ],
    }),
  ],
};
