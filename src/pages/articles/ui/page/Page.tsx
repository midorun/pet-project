import { FC } from 'react'

import { ArticleList } from 'entities/article'
import { useGetArticles } from 'entities/article'
import { useTranslation } from 'react-i18next'

import cn from 'shared/lib/cn'
import { Loader } from 'shared/ui/loader/Loader'

import Filters from './filters/Filters'

const Page: FC = (props) => {
  const {} = props

  const { t } = useTranslation()

  const { data, isLoading, isError } = useGetArticles()

  if (isError) {
    return null
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={cn('gap-4')}>
      <h1>{t('Статьи')}</h1>

      <Filters />

      <ArticleList data={data} />
    </div>
  )
}

export default Page
