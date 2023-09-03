const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production', // Change to 'production' for production build
  entry: {
    'hello/index': './src/routes/hello/index.ts', // Entry point for the hello route
    'index/index': './src/routes/index/index.ts', // Entry point for the index route
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'), // Output directory is a common 'dist' folder,
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
  //externals: [nodeExternals()],
  plugins: [
    // Copy package.json from src/routes/hello to dist/hello
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/routes/hello/package.json',
          to: 'hello/package.json',
        },
        {
          from: 'src/routes/index/package.json',
          to: 'index/package.json',
        },
      ],
    }),
  ],
};
