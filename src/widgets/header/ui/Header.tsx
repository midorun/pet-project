import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

import LoginForm from 'features/login/ui/LoginForm'

import cn from 'shared/lib/cn'
import useToggleState from 'shared/lib/hooks/useToggleState'
import { UIVariantEnum } from 'shared/types'
import Button from 'shared/ui/button/Button'

import cns from './Header.module.scss'

type HeaderProps = {}

const Header: FC<HeaderProps> = (props) => {
  const {} = props

  const { t } = useTranslation()

  const [isModalOpen, setIsModalOpenToTrue, setIsModalOpenToFalse] =
    useToggleState()

  return (
    <header className={cn(cns.Header)}>
      <Button
        variant={UIVariantEnum.PRIMARY}
        className={cn(cns.LoginButton)}
        onClick={setIsModalOpenToTrue}
      >
        {t('Войти')}
      </Button>

      <LoginForm
        isOpen={isModalOpen}
        onClose={setIsModalOpenToFalse}
      />
    </header>
  )
}

export default Header
