import { FC } from 'react'

import ArticleCard from 'entities/article'
import { useGetArticles } from 'entities/article/api/getArticles'

import cn from 'shared/lib/cn'
import { Loader } from 'shared/ui/loader/Loader'

import cns from './ArticlesPage.module.scss'

const ArticlesPage: FC = (props) => {
  const {} = props

  const { data, isLoading, isError } = useGetArticles()

  if (isError) {
    return null
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={cn('flex gap-4')}>
      {data.map((article) => {
        return (
          <ArticleCard
            key={article.id}
            {...article}
          />
        )
      })}
    </div>
  )
}

export default ArticlesPage
