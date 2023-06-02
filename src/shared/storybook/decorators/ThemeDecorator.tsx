import { StoryFn } from '@storybook/react'

import { ThemeValuesEnum } from 'app/providers/ThemeProvider'

const ThemeDecorator = (theme: ThemeValuesEnum) => (Story: StoryFn) => {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  )
}

export default ThemeDecorator
