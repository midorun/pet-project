import React, { FC, PropsWithChildren, useRef } from 'react'

import { useTranslation } from 'react-i18next'

import { useGetCurrentUser } from 'entities/user/api/useGetCurrentUser'
import cns from 'entities/user/ui/user-profile-card/UserProfileCard.module.scss'

import cn from 'shared/lib/cn'
import Card from 'shared/ui/card/Card'

const UserProfileCard: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const { t } = useTranslation()

  const ref = useRef(null)

  const { data, isLoading, isError } = useGetCurrentUser()

  if (isError) {
    return <span>{t('Ошибка сервера')}</span>
  }

  const { id, address, company, ...fields } = data

  return (
    <Card className={cn(cns.UserProfileCard)}>
      <div className={cns.dataField}>
        <span>{t('username')}:</span>
        <span>{fields.username}</span>
      </div>
      <div className={cns.dataField}>
        <span>{t('email')}:</span>
        <span>{fields.email}</span>
      </div>
      <div className={cns.dataField}>
        <span>{t('phone')}:</span>
        <span>{fields.phone}</span>
      </div>
      <div className={cns.dataField}>
        <span>{t('website')}:</span>
        <span>{fields.website}</span>
      </div>

      {children}
    </Card>
  )
}

export default UserProfileCard
