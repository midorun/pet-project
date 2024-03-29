import { Meta, StoryObj } from '@storybook/react'

import NavbarLink from 'widgets/navbar/ui/link/NavbarLink'

import { HomeIcon } from 'shared/assets/icons'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof NavbarLink> = {
  title: '/NavbarLink',
  component: NavbarLink,
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    icon: HomeIcon,
    translationKey: 'link',
    to: 'link',
  },
}
