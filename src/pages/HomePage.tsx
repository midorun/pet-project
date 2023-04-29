import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

const HomePage: FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('home')}</h1>
    </div>
  )
}

export default HomePage
