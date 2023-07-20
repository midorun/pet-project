import { Meta, StoryObj } from '@storybook/react'

import Header from 'widgets/header/index'

const meta: Meta<typeof Header> = {
  title: 'widgets/Header',
  component: Header,
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {}
