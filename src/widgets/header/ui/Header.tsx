import React, { FC, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

import LoginForm from 'features/login/ui/LoginForm'

import { LocalStorageKeysEnum } from 'shared/const/localStorageKeys'
import cn from 'shared/lib/cn'
import useBooleanState from 'shared/lib/hooks/useBooleanState'
import { UIVariantEnum } from 'shared/types'
import Button from 'shared/ui/button/Button'

import cns from './Header.module.scss'

const Header: FC = () => {
  const { t } = useTranslation()

  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(LocalStorageKeysEnum.IS_AUTHORIZED)) {
      setIsAuthorized(true)
    }
  }, [localStorage.getItem(LocalStorageKeysEnum.IS_AUTHORIZED)])

  const [isModalOpen, setIsModalOpenToTrue, setIsModalOpenToFalse] =
    useBooleanState()

  const buttonTranslationKey = isAuthorized ? 'Выйти' : 'Войти'

  const logout = () => {
    setIsAuthorized(false)
    localStorage.removeItem(LocalStorageKeysEnum.IS_AUTHORIZED)
  }

  const buttonClickHandler = () =>
    isAuthorized ? logout : setIsModalOpenToTrue

  return (
    <header className={cn(cns.Header)}>
      <Button
        variant={UIVariantEnum.PRIMARY}
        className={cn(cns.LoginButton)}
        onClick={buttonClickHandler()}
      >
        {t(buttonTranslationKey)}
      </Button>

      <LoginForm
        isOpen={isModalOpen}
        onClose={setIsModalOpenToFalse}
      />
    </header>
  )
}

export default Header
