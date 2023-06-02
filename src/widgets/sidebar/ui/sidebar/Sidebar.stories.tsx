import { Meta, StoryObj } from '@storybook/react'

import { ThemeValuesEnum } from 'app/providers/ThemeProvider'

import ThemeDecorator from 'shared/storybook/decorators/ThemeDecorator'
import ThemeProviderDecorator from 'shared/storybook/decorators/ThemeProviderDecorator'

import Sidebar from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  decorators: [ThemeProviderDecorator],
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Default: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(ThemeValuesEnum.DARK)],
}