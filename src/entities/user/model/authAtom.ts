import { atom } from 'recoil'

import rest from 'shared/api'
import { LocalStorageKeysEnum } from 'shared/const/localStorageKeys'

export const authAtom = atom<string>({
  key: 'isAuth',
  default: localStorage.getItem(LocalStorageKeysEnum.IS_AUTHORIZED) ?? '',
  effects: [
    (param) => {
      const { onSet } = param
      onSet((newValue) => {
        if (newValue === '') {
          localStorage.removeItem(LocalStorageKeysEnum.IS_AUTHORIZED)
        } else {
          localStorage.setItem(LocalStorageKeysEnum.IS_AUTHORIZED, newValue)

          rest.defaults.headers.common['Authorization'] = localStorage.getItem(
            LocalStorageKeysEnum.IS_AUTHORIZED
          )
        }
      })
    },
  ],
})
