import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

import { UpdatableUserProfileCard } from '@entities/user'

const HomePage: FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <UpdatableUserProfileCard />
    </div>
  )
}

export default HomePage
