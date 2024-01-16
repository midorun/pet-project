import React, { FC } from 'react'

import { Button } from '@mui/joy'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { useUpdateUser } from 'features/update-user-profile-card'

import { UserType, useGetCurrentUser } from '@entities/user'

import Card from 'shared/ui/DEPRECATED/card/Card'
import { Loader } from 'shared/ui/DEPRECATED/loader/Loader'
import Input from 'shared/ui/text-field/TextField'

type FormValues = Pick<UserType, 'username' | 'email' | 'phone' | 'website'>

export type UserProfileCardFormProps = {
  defaultValues: FormValues
  onUpdateComplete: () => void
}

const UserProfileCardForm: FC<UserProfileCardFormProps> = (props) => {
  const { defaultValues, onUpdateComplete } = props

  const { t } = useTranslation()

  const updateUser = useUpdateUser()

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues,
  })

  const { data: user, isSuccess } = useGetCurrentUser()

  if (!isSuccess) {
    return <Loader />
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    updateUser.mutate({ id: user?.id, data })
    onUpdateComplete()
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={t('Логин')}
          {...register('username')}
        />
        <Input
          label={t('Почта')}
          {...register('email')}
        />
        <Input
          label={t('Телефон')}
          {...register('phone')}
        />
        <Input
          label={t('Сайт')}
          {...register('website')}
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button type={'submit'}>{t('Сохранить изменения')}</Button>
          <Button onClick={onUpdateComplete}>
            {t('Отменить редактирование')}
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default UserProfileCardForm
