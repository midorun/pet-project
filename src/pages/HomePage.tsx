import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

const HomePage: FC = () => {
  const { t } = useTranslation()

  console.log(__API_BASE_URL__)

  return (
    <div>
      <h1>{t('home')}</h1>
    </div>
  )
}

export default HomePage
