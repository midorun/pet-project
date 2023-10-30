import { Meta, StoryObj } from '@storybook/react'

import 'app/styles/index.scss'
import NavbarLink from 'widgets/navbar/ui/link/NavbarLink'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof NavbarLink> = {
  title: '/NavbarLink',
  component: NavbarLink,
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {}
