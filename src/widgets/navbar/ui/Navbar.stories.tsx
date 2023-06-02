import { Meta, StoryObj } from '@storybook/react'

import RouterDecorator from 'shared/storybook/decorators/RouterDecorator'

import Navbar from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [RouterDecorator],
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Default: Story = {}
