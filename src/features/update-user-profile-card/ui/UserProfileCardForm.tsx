import React, { FC } from 'react'

import { UserType, useGetCurrentUser } from '@entities/user'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { useUpdateUser } from 'features/update-user-profile-card'

import Button from 'shared/ui/button/Button'
import Card from 'shared/ui/card/Card'
import Input from 'shared/ui/input/Input'
import { Loader } from 'shared/ui/loader/Loader'

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
