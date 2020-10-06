const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: [ '.js' ],
    modules: [path.resolve(__dirname), 'node_modules'],
    alias: {
      'tiny-lru': 'tiny-lru/lib/tiny-lru.cjs.js',
    }
  },
  target: 'node',
};
