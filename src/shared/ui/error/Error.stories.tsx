import { Meta, StoryObj } from '@storybook/react'

import Error from './Error'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Error> = {
  title: 'shared/Error',
  component: Error,
}

export default meta
type Story = StoryObj<typeof Error>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
}
