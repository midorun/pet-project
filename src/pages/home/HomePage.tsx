import React, { FC } from 'react'

import { UpdatableUserProfileCard } from '@entities/user'
import { useTranslation } from 'react-i18next'

const HomePage: FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('home')}</h1>

      <UpdatableUserProfileCard />
    </div>
  )
}

export default HomePage
