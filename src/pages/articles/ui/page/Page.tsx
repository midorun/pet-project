import { FC } from 'react'

import { ArticleList } from 'entities/article'
import { useTranslation } from 'react-i18next'

import cn from 'shared/lib/cn'

import Filters from './filters/ui/Filters'

const Page: FC = (props) => {
  const {} = props

  const { t } = useTranslation()

  return (
    <div className={cn('gap-4')}>
      <h1>{t('Статьи')}</h1>

      <Filters />

      <ArticleList />
    </div>
  )
}

export default Page
