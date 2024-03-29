import { Meta, StoryObj } from '@storybook/react'

import Image from './Image'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Image> = {
  title: 'entities/article/Image',
  component: Image,
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {}
