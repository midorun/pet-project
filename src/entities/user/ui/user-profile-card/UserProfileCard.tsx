import React, { FC, PropsWithChildren, useRef } from 'react'

import { useTranslation } from 'react-i18next'

import { useGetCurrentUser } from 'entities/user/api/useGetCurrentUser'

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
    <Card className={'flex flex-col space-y-1'}>
      <div className={'flex'}>
        <span>{t('username')}:</span>
        <span>{fields.username}</span>
      </div>
      <div className={'flex'}>
        <span>{t('email')}:</span>
        <span>{fields.email}</span>
      </div>
      <div className={'flex'}>
        <span>{t('phone')}:</span>
        <span>{fields.phone}</span>
      </div>
      <div className={'flex'}>
        <span>{t('website')}:</span>
        <span>{fields.website}</span>
      </div>

      {children}
    </Card>
  )
}

export default UserProfileCard
