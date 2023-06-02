import { ThemeValuesEnum } from 'app/providers/ThemeProvider'

import StyleDecorator from 'shared/storybook/decorators/StyleDecorator'
import ThemeDecorator from 'shared/storybook/decorators/ThemeDecorator'

import type { Preview } from '@storybook/react'

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
  decorators: [StyleDecorator, ThemeDecorator(ThemeValuesEnum.LIGHT)],
}

export default preview
