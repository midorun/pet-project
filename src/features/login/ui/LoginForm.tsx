import React, { FC } from 'react'

import { Sheet, Typography, Button, Stack } from '@mui/joy'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { required } from 'shared/const/RHF-rules'
import TextFieldController from 'shared/ui/text-field/TextFieldController'

import { LoginArgs } from '../api/useLogin'

type FormData = LoginArgs

type Props = {
  onSubmit: (data: FormData) => void
}

const LoginForm: FC<Props> = (props) => {
  const { onSubmit } = props

  const { t } = useTranslation()

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<FormData>()

  const submit = async (data: FormData) => {
    await onSubmit(data)
  }

  return (
    <Sheet className="mx-auto mt-4 flex w-[300px] flex-col gap-2 rounded-sm">
      <div>
        <Typography
          level="h4"
          component="h1"
        >
          {t('Sign in to continue')}
        </Typography>
      </div>

      <form onSubmit={handleSubmit(submit)}>
        <Stack spacing={2}>
          <TextFieldController
            name="username"
            control={control}
            placeholder="admin"
            rules={{ required }}
          />

          <TextFieldController
            control={control}
            name="password"
            type="password"
            placeholder="password"
            rules={{ required }}
          />

          <Button
            loading={isSubmitting}
            type="submit"
          >
            {t('Войти')}
          </Button>
        </Stack>
      </form>
    </Sheet>
  )
}

export default LoginForm
