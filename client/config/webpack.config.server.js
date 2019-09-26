const path = require("path");
const webpack = require("webpack");
const paths = require("./paths");
const getClientEnvironment = require("./env");
const LoadablePlugin = require("@loadable/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

module.exports = {
  entry: paths.ssrJs,
  target: "node",
  mode: "production",
  output: {
    path: paths.ssrBuild,
    filename: "ssr.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            include: paths.appSrc,
            loader: require.resolve("babel-loader"),
            options: {
              cacheDirectory: true
            }
          },
          {
            test: /\.css$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              { loader: require.resolve("css-loader") }
            ],
            options: {
              exportOnlyLocals: true
            }
          },
          {
            test: /\.scss$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: "[name]__[local]__[hash:base64:5]",
                  exportOnlyLocals: true
                }
              },
              {
                loader: require.resolve("sass-loader"),
                options: {
                  includePaths: [paths.globalStyles]
                }
              }
            ]
          },
          {
            loader: require.resolve("file-loader"),
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            options: {
              name: "static/media/[name].[hash:8].[ext]",
              emitFile: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ["node_modules", paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin(env.stringified),
    new LoadablePlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false
    })
  ]
};
