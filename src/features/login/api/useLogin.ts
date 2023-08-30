import { useMutation } from '@tanstack/react-query'

import rest from 'shared/api'
import { LocalStorageKeysEnum } from 'shared/const/localStorageKeys'

export const useLogin = () =>
  useMutation({
    mutationKey: ['login'],
    mutationFn: (userAuthData: unknown) => {
      return rest.post('/login', userAuthData)
    },
    onSuccess: (data) => {
      localStorage.setItem(LocalStorageKeysEnum.IS_AUTHORIZED, 'true')
      rest.defaults.headers.common['Authorization'] = localStorage.getItem(
        LocalStorageKeysEnum.IS_AUTHORIZED
      )
    },
  })
