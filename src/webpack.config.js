const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory
    filename: 'bundle.js',  // Output filename
  },
  module: {
    rules: [
      // Define loaders for handling different file types (e.g., Babel for JavaScript)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  // Define plugins and additional configuration as needed
};
