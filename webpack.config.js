const HtmlWebpackPlugin = require("html-webpack-plugin");
// const {ModuleFederationPlugin} = require("webpack").container;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    //   'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    // },
    historyApiFallback: true
  },
  output: {
    publicPath: "auto",
    assetModuleFilename: (pathData) => {
      const filepath = path.dirname(pathData.filename).split("/").slice(1).join("/");
      return `${filepath}/[name].[hash][ext][query]`;
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/env",
            "@babel/preset-react",
            "@babel/preset-typescript"
          ],
        },
      },
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]'
              },
            }
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|pdf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: "host",
    //   remotes: {
    //     contacts: "contacts@http://localhost:4200/remoteEntry.js",
    //     app2: "app2@http://localhost:3002/remoteEntry.js",
    //     react_app: "react_app@http://localhost:3000/remoteEntry.js",
    //   },
    // }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    }),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', ".css"],
  },
};

