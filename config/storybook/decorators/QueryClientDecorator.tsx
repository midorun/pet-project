import { StoryFn } from '@storybook/react'
import { QueryClientProvider } from '@tanstack/react-query'

import queryClient from 'app/providers/query-client'

const QueryClientDecorator = () => (Story: StoryFn) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  )
}

export default QueryClientDecorator
