import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import Navbar from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Default: Story = {}

export const Hovered: Story = {
  args: {
    isHovered: true,
  },
}
