import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

const ArticlesPage: FC = (props) => {
  const {} = props

  const { t } = useTranslation()

  return <div>{t('ArticlesPage')}</div>
}

export default ArticlesPage
