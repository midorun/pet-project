import React, { FC, useRef } from 'react'

import { useTranslation } from 'react-i18next'

import UserProfileCardForm from 'features/update-user-profile-card'

import UserProfileCard, { UserType } from 'entities/user'
import { useGetCurrentUser } from 'entities/user/api/useGetCurrentUser'

import useBooleanState from 'shared/lib/hooks/useBooleanState'
import Button from 'shared/ui/button/Button'
import Skeleton from 'shared/ui/skeleton/Skeleton'

const UpdatableUserProfileCard: FC = (props) => {
  const {} = props

  const { t } = useTranslation()
  const ref = useRef(null)

  const [isUpdating, setIsUpdatingToTrue, setIsUpdatingToFalse] =
    useBooleanState(false)

  const queryResult = useGetCurrentUser()
  const { isLoading, isError, isPlaceholderData } = queryResult

  if (isError) {
    return <span>{t('Ошибка сервера')}</span>
  }

  const data = queryResult.data as UserType

  return (
    <Skeleton isLoading={isPlaceholderData}>
      {isUpdating ? (
        <UserProfileCardForm
          defaultValues={data}
          onUpdateComplete={setIsUpdatingToFalse}
        />
      ) : (
        <UserProfileCard>
          <Button onClick={setIsUpdatingToTrue}>{t('Редактировать')}</Button>
        </UserProfileCard>
      )}
    </Skeleton>
  )
}

export default UpdatableUserProfileCard
