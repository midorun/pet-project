import React from 'react'

import { useTranslation } from 'react-i18next'
import { useRouteError } from 'react-router-dom'

import { FC } from 'shared/types'

const NotFoundPage: FC = () => {
  const { t } = useTranslation()

  const error = useRouteError()
  console.log(error)

  return <div>{t('notFoundPage')}</div>
}

export default NotFoundPage
