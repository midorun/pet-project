import { Meta, StoryObj } from '@storybook/react'

import Input from 'shared/ui/input/Input'

const meta: Meta<typeof Input> = {
  title: 'widgets/Input',
  component: Input,
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}
