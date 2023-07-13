import path from 'path'

import type { StorybookConfig } from '@storybook/react-webpack5'

import { buildCssRule } from '../build/rules/buildCssRule'
import { buildSVGRule } from '../build/rules/buildSVGRule'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-react-router-v6',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  webpackFinal: async (config) => {
    if (config.resolve?.modules) {
      config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'))
    }

    if (config.resolve?.extensions) {
      config.resolve.extensions.push('.ts', '.tsx')
    }

    if (config.module?.rules) {
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

      config.module.rules.push(buildCssRule(true))
    }

    return config
  },
}
export default config
