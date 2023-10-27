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
  resolve: {
    fallback: {
      "fs": false,
       "os": require.resolve("os-browserify/browser"),
       "path": require.resolve("path-browserify") 
    }
  }
  // Define plugins and additional configuration as needed
};
