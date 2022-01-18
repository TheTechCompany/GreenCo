const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const webpack = require('webpack')
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "greenco-apps",
    projectName: "signage-frontend",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.m?js/,
          resolve: {
              fullySpecified: false,
          },
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                      name: '[path][name].[ext]'
                  }
              }
          ]
        }
      ]
    },
    resolve: {
      fallback: {
        "process": require.resolve('process/browser')
      },
      plugins: [
        new TsConfigPathsPlugin()
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new webpack.EnvironmentPlugin({
        ...process.env,
        PUBLIC_URL: '/dashboard/signage'
      }),  
    ]
  });
};
