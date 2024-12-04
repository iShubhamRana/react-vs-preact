const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        preact: {
          test: /[\\/]node_modules[\\/](preact)[\\/]/,
          name: 'preact',
          chunks: 'all',
          enforce: true
        },
      }
    }
  
    },
    plugins : [ 
      new BundleAnalyzerPlugin(),
    ],  
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat", // Must be below test-utils
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
  target: "web",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react", "@babel/preset-env"],
                    plugins: [
                        ["@babel/plugin-transform-runtime"],
                        [
                            "@babel/plugin-transform-react-jsx",
                            {
                                pragma: "h",
                                pragmaFrag: "Fragment",
                            },
                        ],
                        [
                            "import",
                            {
                                libraryName: "antd",
                                style: true,
                            },
                        ],
                    ],
                },
            },
        },
        
    ],
  },
};
