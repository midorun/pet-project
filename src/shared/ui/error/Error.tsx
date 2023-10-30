import { FC } from 'react'

import { useTranslation } from 'react-i18next'

import cn from 'shared/lib/cn'

const Error: FC = () => {
  const { t } = useTranslation()

  return <span className={cn('')}>{t('Error')}</span>
}

export default Error
