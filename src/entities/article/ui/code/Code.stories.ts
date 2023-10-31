import { Meta, StoryObj } from '@storybook/react'

import Code from './Code'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Code> = {
  title: 'entities/article/Code',
  component: Code,
}

export default meta

type Story = StoryObj<typeof Code>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
}
