import { Meta, StoryObj } from '@storybook/react'

import AddArticleComment from './AddArticleComment'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AddArticleComment> = {
  title: 'shared/AddArticleComment',
  component: AddArticleComment,
  args: {},
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
}
