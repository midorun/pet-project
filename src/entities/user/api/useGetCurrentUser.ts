import { useQuery } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'

import { authAtom } from 'entities/user/model/authAtom'
import { UserType } from 'entities/user/model/types'

import rest from 'shared/api'

const getCurrentUser = async (id?: string) => {
  const res = await rest.get<UserType>('/me', { params: { id } })

  return res.data
}

export const useGetCurrentUser = () => {
  const isAuthValue = useRecoilValue(authAtom)

  return useQuery({
    queryKey: ['me', isAuthValue],
    queryFn: () => getCurrentUser(isAuthValue),
    enabled: !!isAuthValue,
  })
}
