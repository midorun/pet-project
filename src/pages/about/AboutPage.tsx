import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

const AboutPage: FC = () => {
  const { t } = useTranslation('about')

  return <h1>{t('about')}</h1>
}

export default AboutPage
