import { StoryFn } from '@storybook/react'
import { RecoilRoot } from 'recoil'

const RecoilDecorator = () => (Story: StoryFn) => {
  return (
    <RecoilRoot>
      <Story />
    </RecoilRoot>
  )
}

export default RecoilDecorator
