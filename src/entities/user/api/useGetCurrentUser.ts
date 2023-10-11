import { useQuery } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'

import { authAtom } from 'entities/user/model/authAtom'
import { UserType } from 'entities/user/model/types'

import rest from 'shared/api'

const getCurrentUser = async (id?: string) => {
  const res = await rest.get<UserType>('/me', { params: { id } })

  return res.data
}

const placeholderData = {
  id: '1',
  username: 'username',
  email: 'Shanna@melissa.tv',
  address: {
    street: 'Victor Plains',
    suite: 'Suite 879',
    city: 'Wisokyburgh',
    zipcode: '90566-7771',
    geo: {
      lat: '-43.9509',
      lng: '-34.4618',
    },
  },
  phone: '010-692-6593 x09125',
  website: 'anastasia.net',
  company: {
    name: 'Deckow-Crist',
    catchPhrase: 'Proactive didactic contingency',
    bs: 'synergize scalable supply-chains',
  },
}

export const useGetCurrentUser = () => {
  const isAuthValue = useRecoilValue(authAtom)

  return useQuery({
    queryKey: ['me', isAuthValue],
    placeholderData: {} as UserType,
    queryFn: () => getCurrentUser(isAuthValue),
    enabled: !!isAuthValue,
  })
}
