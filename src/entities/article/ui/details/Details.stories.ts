import { Meta, StoryObj } from '@storybook/react'

import 'app/styles/index.scss'
import Details from 'entities/article/ui/details/details'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Details> = {
  title: '/Article',
  component: Details,
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {}
