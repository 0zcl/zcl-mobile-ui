const path = require('path');

module.exports = {
  devServer: {
    port: 9999,
    hot: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      'src': path.resolve(__dirname, 'src'),
      'utils': path.resolve(__dirname, 'utils'),
      'assets': path.resolve(__dirname, 'assets')
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|tiff|webp|hiec)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
            },
          },
        ]
      }
    ]
  }
};