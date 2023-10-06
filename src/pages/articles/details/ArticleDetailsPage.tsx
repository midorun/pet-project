import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

const ArticleDetailsPage: FC = (props) => {
  const {} = props

  const { t } = useTranslation()

  return <div>{t('ArticleDetailsPage')}</div>
}

export default ArticleDetailsPage
