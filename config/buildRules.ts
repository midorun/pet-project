import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

import { BuildOptions } from './types'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ReactRefreshTypeScript = require('react-refresh-typescript')

export const buildRules = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options

  return [
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => ({
              before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
            }),
            transpileOnly: isDev,
          },
        },
      ],
      exclude: /node_modules/,
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
              localIdentName: isDev
                ? '[path][name]__[local]'
                : '[hash:base64:8]',
            },
          },
        },
        // Compiles Sass to CSS
        'sass-loader',
      ],
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
    {
      test: /\.(png|jpe?g|gif|woff|woff2)$/i,
      type: 'asset/resource',
    },
  ]
}
