import React, { FC } from 'react'

import { Button } from '@mui/joy'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import LoginForm, { LoginArgs, useLogin } from 'features/login'

import { authAtom } from '@entities/user'

import useBooleanState from 'shared/lib/hooks/useBooleanState'
import BasicModal from 'shared/ui/modal/Modal'

const Login: FC = () => {
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

  const loginHandler = async (data: LoginArgs) => {
    await login.mutateAsync(data, {
      onSuccess: () => {
        setIsModalOpenToFalse()
        navigate('/home')
      },
    })
  }
  const buttonClickHandler = () => (isAuth ? logout : setIsModalOpenToTrue)

  return (
    <>
      <Button onClick={buttonClickHandler()}>{t(buttonTranslationKey)}</Button>
      <BasicModal
        isOpen={isModalOpen}
        onClose={setIsModalOpenToFalse}
      >
        <LoginForm onSubmit={loginHandler} />
      </BasicModal>
    </>
  )
}

export default Login
