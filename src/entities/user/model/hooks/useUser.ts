import { useQuery } from '@tanstack/react-query'

import rest from 'shared/api'

import { User } from '../types'

const getUser = async (id: string) => {
  const res = await rest.get<User>('/me', { params: { id } })
  return res.data
}

export const useUser = (id?: string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
    enabled: !!id,
  })
}
