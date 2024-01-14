import { FC } from 'react'

import { useRecoilValue } from 'recoil'

import { displayAtomSelector } from 'pages/articles/ui/display/model/displayAtom'
import { articlesFiltersAtom } from 'pages/articles/ui/filters/model/filtersAtom'

import { useGetArticles } from '@entities/article'

import cn from 'shared/lib/cn'
import Loader from 'shared/ui/loader/Loader'

import ArticleCard from '../card/ArticleCard'

const List: FC = () => {
  const filtersState = useRecoilValue(articlesFiltersAtom)
  const { isDisplayTile } = useRecoilValue(displayAtomSelector)

  const { data, isLoading, isError } = useGetArticles({ params: filtersState })

  if (isError) {
    return null
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div
      className={cn('', {
        'flex flex-wrap gap-10': isDisplayTile,
        'space-y-10': !isDisplayTile,
      })}
    >
      {data.map((item) => {
        return (
          // @ts-expect-error
          <ArticleCard
            {...item}
            isDisplayTile={isDisplayTile}
            key={item.id}
          />
        )
      })}
    </div>
  )
}

export default List
