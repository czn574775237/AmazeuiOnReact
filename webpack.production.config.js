import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  entry: {
    amazeui: './components/index',
    vendor: [
      'react', 'react-router'
    ]
  },

  debug: false,

  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
    modulesDirectories: ['web_modules', 'node_modules'],
    extensions: ['', '.web.js', '.js', '.jsx'],
    alias: {}
  },

  module: {
    noParse: [],
    loaders: [
      {
        test: /\.js$/,
        loader: 'react-hot!babel!eslint',
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, './app')
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!autoprefixer!less'
        )
      },
      {
        test: /\.less$/,
        loader:  ExtractTextPlugin.extract(
          'style',
          'css!autoprefixer!less'
        )
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?limit=10000'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/,
        loader: 'file?limit=10000'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?limit=10000'
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js'
  },

  // externals: {
  //   'react': 'React',
  //   // 'react-router': 'ReactRouter',
  //   'sweetalert': 'swal'
  // },

  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin(
      'vendor', 'vendor.bundle.js'
    ),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        __CLIENT__: JSON.stringify(true),
        __SERVER__: JSON.stringify(false),
        __DEV__: JSON.stringify(false),
        __DEVTOOLS__: JSON.stringify(false)
      },
    }),
    new webpack.NoErrorsPlugin()
  ]
};
