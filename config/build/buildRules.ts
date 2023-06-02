import webpack from 'webpack'

import { buildCssRule } from './rules/buildCssRule'

import { buildSVGRule } from '../build/rules/buildSVGRule'
import { BuildOptions } from '../types'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ReactRefreshTypeScript = require('react-refresh-typescript')

export const buildRules = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options

  return [
    // {
    //   test: /\.(jsx|tsx)?$/,
    //   exclude: ['node_modules'],
    //   use: ['babel-loader'],
    // },
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
    buildCssRule(isDev),
    buildSVGRule(),
    {
      test: /\.(png|jpe?g|gif|woff|woff2)$/i,
      type: 'asset/resource',
    },
  ]
}
