import { withRouter } from 'storybook-addon-react-router-v6'

import { ThemeValuesEnum } from 'app/providers/ThemeProvider'

import type { Preview } from '@storybook/react'

import StyleDecorator from './decorators/StyleDecorator'
import ThemeDecorator from './decorators/ThemeDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(ThemeValuesEnum.LIGHT),
    withRouter,
  ],
}

export default preview
