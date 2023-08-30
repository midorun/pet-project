import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

import UserProfileCardForm from 'features/update-user-profile-card'

import UserProfileCard from 'entities/user'
import { useUser } from 'entities/user/model/hooks/useUser'

import useBooleanState from 'shared/lib/hooks/useBooleanState'
import Button from 'shared/ui/button/Button'
import { Loader } from 'shared/ui/loader/Loader'

export type UpdatableUserProfileCardProps = { userId: string }

const UpdatableUserProfileCard: FC<UpdatableUserProfileCardProps> = (props) => {
  const { userId } = props

  const { t } = useTranslation()

  const [isUpdating, setIsUpdatingToTrue, setIsUpdatingToFalse] =
    useBooleanState(false)

  const { data, isLoading, isError } = useUser(userId)

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <span>{t('Ошибка сервера')}</span>
  }

  return isUpdating ? (
    <UserProfileCardForm
      userId={userId}
      defaultValues={data}
      onUpdateComplete={setIsUpdatingToFalse}
    />
  ) : (
    <UserProfileCard userId={userId}>
      <Button onClick={setIsUpdatingToTrue}>{t('Редактировать')}</Button>
    </UserProfileCard>
  )
}

export default UpdatableUserProfileCard
