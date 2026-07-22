const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  devServer: {
    port: 3000,
  },

  output: {
    publicPath: "auto",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },

    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",

      // Registro dos micros remotos que serão consumidos pelo container no Module Federation
      remotes: {
        cardapio: "cardapio@http://localhost:3001/remoteEntry.js",
        pedido: "pedido@http://localhost:3002/remoteEntry.js",
      },

      shared: {
        react: {
          singleton: true,
          requiredVersion: "18.2.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "18.2.0",
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};