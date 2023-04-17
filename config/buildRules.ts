import { Env } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

const buildRules = (env: Env): webpack.RuleSetRule[] =>  [
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      env.mode === "development"
        ? "style-loader"
        : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: env.mode === 'development' ? '[path][name]__[local]' : '[hash:base64:8]'
          },
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  },
  // {
  //   test: /\.m?ts?$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: 'babel-loader',
  //     options: {
  //       presets: [
  //         ['@babel/preset-env', { targets: "defaults" }]
  //       ],
  //       plugins: ['@babel/module-resolver']
  //     },
  //   }
  // }
]

export default buildRules