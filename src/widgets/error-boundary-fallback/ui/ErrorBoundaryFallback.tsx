import React from 'react'

import { useTranslation } from 'react-i18next'

import { FC } from 'shared/types'

const ErrorBoundaryFallback: FC = () => {
  const { t } = useTranslation()

  return <div>{t('error-boundary')}</div>
}

export default ErrorBoundaryFallback
