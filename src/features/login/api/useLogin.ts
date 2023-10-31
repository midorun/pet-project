import { useMutation } from '@tanstack/react-query'
import { useSetRecoilState } from 'recoil'

import { authAtom, UserType } from '@entities/user'

import rest from 'shared/api'

export type LoginArgs = {
  username: string
  password: string
}

const login = async (args: LoginArgs) => {
  const res = await rest.post<UserType>('/login', args)

  return res.data
}

export const useLogin = () => {
  const setIsAuthState = useSetRecoilState(authAtom)
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (variables: LoginArgs) => {
      return login(variables)
    },
    onSuccess: (data) => {
      setIsAuthState(data.id)
    },
  })
}
