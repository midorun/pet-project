import { Meta, StoryObj } from '@storybook/react'

import LoginForm from 'features/login/ui/LoginForm'

const meta: Meta<typeof LoginForm> = {
  title: 'widgets/LoginForm',
  component: LoginForm,
}

export default meta

type Story = StoryObj<typeof LoginForm>

export const Default: Story = {}
