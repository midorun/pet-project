import { useQuery } from '@tanstack/react-query'

import rest from 'shared/api'

import { UserType } from '../model/types'

const getUser = async (id?: string) => {
  const res = await rest.get<UserType[]>('/users', { params: { id } })
  return res.data
}

export const useGetUser = (id?: string) => {
  return useQuery({
    queryKey: [getUser.name, id],
    queryFn: () => getUser(id),
    select: (data) => {
      return data[0]
    },
    enabled: !!id,
  })
}
