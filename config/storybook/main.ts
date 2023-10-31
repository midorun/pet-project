import path from 'path'

import webpack from 'webpack'

import type { StorybookConfig } from '@storybook/react-webpack5'

import { buildSVGRule } from '../build/rules/buildSVGRule'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-react-router-v6',
    '@storybook/addon-styling-webpack',
  ],
  framework: '@storybook/react-webpack5',
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: false,
      },
    },
  },
  webpackFinal: async (config) => {
    if (
      config.resolve?.modules &&
      config.resolve?.alias &&
      config.resolve?.extensions &&
      config.module?.rules
    ) {
      config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'))

      config.resolve.alias = {
        ...config.resolve.alias,
        '@storybookConfig': path.resolve(__dirname, './'),
        '@entities': path.resolve(__dirname, '..', '..', 'src', 'entities'),
      }

      config.resolve.extensions.push('.ts', '.tsx')

      config.module.rules = config.module.rules.map((rule) => {
        // @ts-expect-error
        if (/svg/.test(rule.test)) {
          // Silence the Storybook loaders for SVG files
          // @ts-expect-error
          return { ...rule, exclude: /\.svg$/i }
        }

        return rule
      })
      config.module.rules.push(buildSVGRule())
      config.module.rules.push({
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          },
        ],
        include: path.resolve(__dirname, '..', '../'),
      })

      config.plugins?.push(
        new webpack.DefinePlugin({
          __API_BASE_URL__: JSON.stringify('http://localhost:8000/'),
        })
      )
    }

    return config
  },
}
export default config
