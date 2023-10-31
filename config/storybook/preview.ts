import { withRouter } from 'storybook-addon-react-router-v6'

import { ThemeValuesEnum } from 'app/providers/ThemeProvider'
import '../../src/index.css' // replace with the name of your tailwind css file

import type { Preview } from '@storybook/react'

import QueryClientDecorator from './decorators/QueryClientDecorator'
import RecoilDecorator from './decorators/RecoilDecorator'
import ThemeDecorator from './decorators/ThemeDecorator'
import ThemeProviderDecorator from './decorators/ThemeProviderDecorator'

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
    ThemeProviderDecorator(),
    RecoilDecorator(),
    QueryClientDecorator(),
    ThemeDecorator(ThemeValuesEnum.LIGHT),
    withRouter,
  ],
}

export default preview
