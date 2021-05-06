const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    port: 9527,
    hot: true
  },
  entry: ['./src/index.js'],
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
    alias: {
      '@': path.resolve(__dirname),
      '@src': path.resolve(__dirname, './src')
    }
  },
  output: {
    filename: 'index.js',
    publicPath: '/',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ]
          }
        }
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]'
              },
              importLoaders: 1
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|jpeg|gif)$/,
        type: 'asset',
        generator: {
          filename: 'images/[hash:7][ext]'
        }
      }
    ]
  }
};
