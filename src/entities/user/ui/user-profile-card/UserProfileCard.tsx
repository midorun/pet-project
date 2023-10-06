import React, { FC, PropsWithChildren } from 'react'

import { useTranslation } from 'react-i18next'

import { useGetCurrentUser } from 'entities/user/api/useUser'
import cns from 'entities/user/ui/user-profile-card/UserProfileCard.module.scss'

import cn from 'shared/lib/cn'
import Card from 'shared/ui/card/Card'
import { Loader } from 'shared/ui/loader/Loader'

const UserProfileCard: FC<PropsWithChildren> = (props) => {
  const { children } = props

  const { t } = useTranslation()

  const { data, isLoading, isError } = useGetCurrentUser()

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <span>{t('Ошибка сервера')}</span>
  }

  const { id, address, company, ...fields } = data

  return (
    <Card className={cn(cns.UserProfileCard)}>
      {Object.entries(fields).map((entry) => {
        const [key, value] = entry
        return (
          <div
            key={key}
            className={cns.dataField}
          >
            <span>{key}:</span>
            <span>{value}</span>
          </div>
        )
      })}

      {children}
    </Card>
  )
}

export default UserProfileCard
