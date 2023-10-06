import { Meta, StoryObj } from '@storybook/react'
import ThemeDecorator from '@storybookConfig/decorators/ThemeDecorator'

import { ThemeValuesEnum } from 'app/providers/ThemeProvider'

import 'app/styles/index.scss'
import { UIVariantEnum } from 'shared/types'
import Button from 'shared/ui/button/Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Text',
  },
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: UIVariantEnum.PRIMARY,
  },
}

export const PrimaryDark: Story = {
  ...Primary,
  decorators: [ThemeDecorator(ThemeValuesEnum.DARK)],
}

export const Secondary: Story = {
  args: {
    variant: UIVariantEnum.SECONDARY,
  },
}
