import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

// import styles from './index.module.scss'

export type HomeProps = {}

const Home: FC<HomeProps> = (props) => {
  const {} = props

  const { t } = useTranslation()

  return <h1>{t('home')}</h1>
}

export default Home
