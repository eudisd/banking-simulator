var webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ENV = process.env.NODE_ENV || 'local',
    config = require(process.cwd() + '/src/config'),
    getHtmlPluginTemplates = require(process.cwd() + '/src/helpers/getHtmlPluginTemplates.js');

var jsLoaders = ['babel'];

var entryList = [
  'babel-polyfill',
  process.cwd() + '/src/js/main.js'
];

if (process.env.NODE_ENV === 'development') {
  entryList.unshift('webpack-dev-server/client?http://0.0.0.0:' + config.PORT);
  entryList.unshift('webpack/hot/dev-server');
  jsLoaders.unshift('react-hot');
}

module.exports = {
  devtool: 'eval',

  entry: {
    'application.bundle': entryList,
    vendor: []
  },

  output: {
    path: process.cwd() + '/dest',
    filename: '[name].min.js',
    publicPath: getPublicPath()
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.min.js'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),

    new CleanWebpackPlugin(['dest'], {
      root: process.cwd(),
      verbose: true,
      dry: false
    })
  ].concat(getHtmlPluginTemplates()),

  module: {
    loaders: [
      { test: /\.js$/, loaders: jsLoaders, exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style/useable!css!less', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json'  },
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: 'style!css'  },
      { test: /\.useable\.css$/, loader: 'style/useable!css'  },
      { test: /\.useable\.less$/, loader: 'style/useable!css!less'  },
      // { test: /.(eot|svg|tff|woff|woff2)$/, loader: 'file?name=' + process.cwd() + '/src/fonts' },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
        ]
      }
    ]
  },

  resolve: {
    root: process.cwd() + '/src',
    extensions: ['', '.js']
  }
};

function getPublicPath() {
  return '/';
}
