import { FC } from 'react'

import { ArticleList } from 'entities/article'
import { useTranslation } from 'react-i18next'

import cn from 'shared/lib/cn'

import Display from './display/ui/Display'
import Filters from './filters/ui/filters/Filters'

const Page: FC = (props) => {
  const {} = props

  const { t } = useTranslation()

  return (
    <div className={cn('gap-4 space-y-4')}>
      <h1>{t('Статьи')}</h1>

      <Filters />

      <Display />

      <ArticleList />
    </div>
  )
}

export default Page
