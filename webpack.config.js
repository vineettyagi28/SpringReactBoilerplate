module.exports = {
  entry: './src/main/webapp/public/App.jsx',
  output: {
    path: __dirname + '/src/main/webapp/public',
    filename: 'bundle.js'
  },
module: {
    loaders: [
      {
        test: /.jsx/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
