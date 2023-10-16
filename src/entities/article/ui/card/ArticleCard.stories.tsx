import { Meta, StoryObj } from '@storybook/react'

import 'app/styles/index.scss'

import ArticleСard from './ArticleCard'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ArticleСard> = {
  title: 'entities/ArticleCard',
  component: ArticleСard,
  args: {},
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
}
