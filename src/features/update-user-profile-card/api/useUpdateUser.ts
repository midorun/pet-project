import { useMutation } from '@tanstack/react-query'

import queryClient from 'app/providers/query-client'

import rest from 'shared/api'

type Args = {
  id: string
  data: unknown
}
const updateUser = async (args: Args) => {
  const { id, data } = args
  const res = await rest.patch(`/users/${id}`, data)
  return res.data
}

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: (variables: Args) => {
      return updateUser(variables)
    },
    onSuccess: (data, variables) => {
      void queryClient.invalidateQueries({ queryKey: ['users', variables.id] })
    },
  })
}
