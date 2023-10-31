import React, { FC } from 'react'

import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import cn from 'shared/lib/cn'
import Button from 'shared/ui/button/Button'
import Input from 'shared/ui/input/Input'

import { LoginArgs } from '../api/useLogin'

type FormData = LoginArgs

type Props = {
  onSubmit: (data: FormData) => void
}

const LoginForm: FC<Props> = (props) => {
  const { onSubmit } = props

  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const submit = (data: FormData) => {
    onSubmit(data)
  }

  const required = t('Обязательное поле')

  return (
    <form
      className={cn('flex flex-col')}
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
  )
}

export default LoginForm
