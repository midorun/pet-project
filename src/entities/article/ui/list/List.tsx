import { FC } from 'react'

import { useRecoilValue } from 'recoil'

import { articlesFiltersAtom } from 'pages/articles/ui/page/filters/model/filtersAtom'

import { useGetArticles } from '@entities/article'

import cn from 'shared/lib/cn'
import Loader from 'shared/ui/loader/Loader'

import ArticleCard from '../card/ArticleCard'

const List: FC = () => {
  const filtersState = useRecoilValue(articlesFiltersAtom)
  const { data, isLoading, isError } = useGetArticles({ params: filtersState })

  if (isError) {
    return null
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={cn('flex flex-wrap gap-10')}>
      {data.map((item) => {
        return (
          <ArticleCard
            key={item.id}
            {...item}
          />
        )
      })}
    </div>
  )
}

export default List
