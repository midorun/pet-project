import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

import UpdatableUserProfileCard from 'entities/user/ui/updatable-user-profile-card/UpdatableUserProfileCard'

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
