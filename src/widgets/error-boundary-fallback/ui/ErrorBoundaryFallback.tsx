import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

const ErrorBoundaryFallback: FC = () => {
  const { t } = useTranslation()

  return <div>{t('error-boundary')}</div>
}

export default ErrorBoundaryFallback
