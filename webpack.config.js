let webpack = require('webpack');
let path = require('path');
let SERVER_PORT = 7000;
let DEV_PORT = SERVER_PORT + 1;

module.exports = {

  entry: [
    // WebpackDevServer host and port
    `webpack-dev-server/client?http://localhost:${DEV_PORT}`,
    'webpack/hot/only-dev-server',
    // Your appʼs entry point
    './app/main'
  ],

  devtool: 'inline-source-map',
  debug: true,

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
          path.resolve(__dirname, 'app'),
          path.resolve(__dirname, 'components')
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?limit=10000'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/,
        loader: 'file-loader?limit=100000'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?limit=10000'
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.bundle.js',
  },

  externals: {
    'sweetalert': 'swal'
  },

  port: DEV_PORT,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        __CLIENT__: true,
        __SERVER__: false,
        __DEV__: true,
        __DEVTOOLS__: true
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devServer: {
    contentBase: './build',
    stats: {
      cached: false,
      colors: true,
      exclude: [
        /node_modules[\\\/]react(-router)?[\\\/]/
      ]
    },

    // enables the HotModuleReplacementPlugin.
    hot: true,

    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: true,
  },
};
