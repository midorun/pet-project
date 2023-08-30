import React, { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { useUpdateUser } from 'features/update-user-profile-card'

import { UserType } from 'entities/user'

import Button from 'shared/ui/button/Button'
import Card from 'shared/ui/card/Card'
import Input from 'shared/ui/input/Input'

type FormValues = Pick<
  UserType,
  'name' | 'username' | 'email' | 'phone' | 'website'
>

export type UserProfileCardFormProps = {
  userId: string
  defaultValues: FormValues
  onUpdateComplete: () => void
}

const UserProfileCardForm: FC<UserProfileCardFormProps> = (props) => {
  const { userId, defaultValues, onUpdateComplete } = props

  const { t } = useTranslation()

  const updateUser = useUpdateUser()

  const { register, reset, handleSubmit } = useForm<FormValues>({
    defaultValues,
  })

  const onSubmit: SubmitHandler<FormValues> = (data, event) => {
    updateUser.mutate({ id: userId, data })
    onUpdateComplete()
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={t('Имя')}
          {...register('name')}
        />
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
