import React, { FC } from 'react'

import { Button, Sheet } from '@mui/joy'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import LoginForm, { LoginArgs, useLogin } from 'features/login'

import { authAtom } from '@entities/user'

import cn from 'shared/lib/cn'
import useBooleanState from 'shared/lib/hooks/useBooleanState'
import BasicModal from 'shared/ui/modal/Modal'

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
    <Sheet
      variant="outlined"
      sx={{
        mx: -6,
        borderLeft: 'none',
      }}
    >
      <header
        className={cn(
          'flex h-header items-center justify-items-start bg-[--inverted-bg-color] px-12'
        )}
      >
        <Button
          sx={{
            ml: 'auto',
          }}
          onClick={buttonClickHandler()}
        >
          {t(buttonTranslationKey)}
        </Button>
        <BasicModal
          isOpen={isModalOpen}
          onClose={setIsModalOpenToFalse}
        >
          <LoginForm onSubmit={loginHandler} />
        </BasicModal>
      </header>
    </Sheet>
  )
}

export default Header
