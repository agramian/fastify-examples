import * as path from 'path';
import * as webpack from 'webpack';
// @ts-ignore
import NodemonPlugin from 'nodemon-webpack-plugin';

const config: webpack.Configuration = {
  entry: './index.ts',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    modules: [path.resolve(__dirname), 'node_modules'],
    alias: {
      'tiny-lru': 'tiny-lru/lib/tiny-lru.cjs.js',
    }
  },
  target: 'node14',
  plugins: [
    new NodemonPlugin({ nodeArgs: ['--inspect=0.0.0.0'] }),
  ],
};

export default config;
