import React, { FC } from 'react'

import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import cn from 'shared/lib/cn'
import Button from 'shared/ui/button/Button'
import Input from 'shared/ui/input/Input'
import Modal from 'shared/ui/modal/Modal'

import cns from './LoginForm.module.scss'

type LoginFormProps = {
  isOpen: boolean
  onClose: () => void
}

type FormData = {
  username: string
  password: string
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { isOpen, onClose } = props

  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const submit = (data: FormData) => {
    console.log(data)
  }

  const required = t('Обязательное поле')

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <form
        className={cn(cns.LoginForm)}
        onSubmit={handleSubmit(submit)}
      >
        <Input
          {...register('username', {
            required,
          })}
          error={errors.username}
        />

        <Input
          type={'password'}
          {...register('password', {
            required,
          })}
          error={errors.password}
        />

        <Button
          // disabled={Boolean(errors)}
          type={'submit'}
        >
          {t('Вход')}
        </Button>
      </form>
    </Modal>
  )
}

export default LoginForm
