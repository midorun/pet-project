import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { LoginArgs, useLogin } from 'features/login/api/useLogin'
import LoginForm from 'features/login/ui/LoginForm'

import { authAtom } from 'entities/user/model/authAtom'

import cn from 'shared/lib/cn'
import useBooleanState from 'shared/lib/hooks/useBooleanState'
import { UIVariantEnum } from 'shared/types'
import Button from 'shared/ui/button/Button'
import Modal from 'shared/ui/modal/Modal'

import cns from './Header.module.scss'

const Header: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [isAuth, setIsAuth] = useRecoilState(authAtom)

  const [isModalOpen, setIsModalOpenToTrue, setIsModalOpenToFalse] =
    useBooleanState()
  const buttonTranslationKey = isAuth ? 'Выйти' : 'Войти'

  const logout = () => {
    setIsAuth('')
  }
  const login = useLogin()

  const loginHandler = (data: LoginArgs) => {
    login.mutate(data, {
      onSuccess: () => {
        setIsModalOpenToFalse()
        navigate('/home')
      },
    })
  }
  const buttonClickHandler = () => (isAuth ? logout : setIsModalOpenToTrue)

  return (
    <header className={cn(cns.Header)}>
      <Button
        variant={UIVariantEnum.PRIMARY}
        className={cn(cns.LoginButton)}
        onClick={buttonClickHandler()}
      >
        {t(buttonTranslationKey)}
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={setIsModalOpenToFalse}
      >
        <LoginForm onSubmit={loginHandler} />
      </Modal>
    </header>
  )
}

export default Header
