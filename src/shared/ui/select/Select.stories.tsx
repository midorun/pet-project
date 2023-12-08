import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import Select from './Select'
import { options } from './model/mock'
import { OptionType } from './model/types'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  args: {
    placeholder: 'Введите или выберите',
    options,
  },
  // decorators: [
  //   (Story) => {
  //     return (
  //       <div style={{ width: 260 }}>
  //         <Story />
  //       </div>
  //     )
  //   },
  // ],
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Single: Story = {
  render: () => {
    const [value, setValue] = useState<OptionType | null>(null)
    console.log(value)

    return (
      <Select
        {...meta.args}
        value={value}
        // @ts-expect-error
        onChange={setValue}
      />
    )
  },
}

export const Multi: Story = {
  args: {
    isMulti: true,
  },
}
