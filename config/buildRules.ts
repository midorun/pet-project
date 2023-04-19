import { BuildOptions } from './types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

export const buildRules = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options

  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
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
  ]
}
