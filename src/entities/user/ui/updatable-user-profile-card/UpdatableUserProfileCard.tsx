import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

import UserProfileCardForm from 'features/update-user-profile-card'

import UserProfileCard from 'entities/user'
import { useGetCurrentUser } from 'entities/user/api/useGetCurrentUser'

import useBooleanState from 'shared/lib/hooks/useBooleanState'
import Button from 'shared/ui/button/Button'
import { Loader } from 'shared/ui/loader/Loader'

const UpdatableUserProfileCard: FC = (props) => {
  const {} = props

  const { t } = useTranslation()

  const [isUpdating, setIsUpdatingToTrue, setIsUpdatingToFalse] =
    useBooleanState(false)

  const { data, isLoading, isError } = useGetCurrentUser()

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <span>{t('Ошибка сервера')}</span>
  }

  return isUpdating ? (
    <UserProfileCardForm
      defaultValues={data}
      onUpdateComplete={setIsUpdatingToFalse}
    />
  ) : (
    <UserProfileCard>
      <Button onClick={setIsUpdatingToTrue}>{t('Редактировать')}</Button>
    </UserProfileCard>
  )
}

export default UpdatableUserProfileCard
