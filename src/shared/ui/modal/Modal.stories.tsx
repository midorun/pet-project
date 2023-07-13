import { Meta, StoryObj } from '@storybook/react'

import { ThemeValuesEnum } from 'app/providers/ThemeProvider'

import ThemeDecorator from 'shared/storybook/decorators/ThemeDecorator'
import Modal from 'shared/ui/modal/Modal'

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adanimi dicta',
    isOpen: true,
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(ThemeValuesEnum.DARK)],
}
