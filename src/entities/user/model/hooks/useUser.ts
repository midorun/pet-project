import { useQuery } from '@tanstack/react-query'

import rest from 'shared/api'

import { UserType } from '../types'

const getUser = async (id: string) => {
  const res = await rest.get<UserType>(`/users/${id}`)
  return res.data
}

export const useUser = (id?: string) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => getUser(id),
    enabled: !!id,
  })
}
