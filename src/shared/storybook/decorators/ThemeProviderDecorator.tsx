import { StoryFn } from '@storybook/react'

import ThemeProvider from 'app/providers/ThemeProvider'

const ThemeProviderDecorator = (Story: StoryFn) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
}

export default ThemeProviderDecorator
