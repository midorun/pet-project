import React, { FC } from 'react'

import { Button } from '@mui/joy'
import { useTranslation } from 'react-i18next'

import UserProfileCardForm from 'features/update-user-profile-card'

import { useGetCurrentUser } from '@entities/user'

import useBooleanState from 'shared/lib/hooks/useBooleanState'

import { UserType } from '../../model/types'
import UserProfileCard from '../user-profile-card/UserProfileCard'

const UpdatableUserProfileCard: FC = (props) => {
  const {} = props

  const { t } = useTranslation()

  const [isUpdating, setIsUpdatingToTrue, setIsUpdatingToFalse] =
    useBooleanState(false)

  const queryResult = useGetCurrentUser()
  const { isLoading, isError } = queryResult

  if (isError) {
    return <span>{t('Ошибка сервера')}</span>
  }

  const data = queryResult.data as UserType

  return (
    <>
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
    </>
  )
}

export default UpdatableUserProfileCard
