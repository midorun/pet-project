import { Meta, StoryObj } from '@storybook/react'

import Text from './Text'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Text> = {
  title: 'entities/article/Text',
  component: Text,
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {}
