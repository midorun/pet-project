import { FC } from 'react'

import { useRecoilValue } from 'recoil'

import { displayAtomSelector } from 'pages/articles/ui/display/model/displayAtom'
import { articlesFiltersAtom } from 'pages/articles/ui/filters/model/filtersAtom'

import { useGetArticles } from '@entities/article'

import cn from 'shared/lib/cn'
import Loader from 'shared/ui/DEPRECATED/loader/Loader'

import ArticleCard from '../card/ArticleCard'
import { Stack } from '@mui/joy'

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
    <Stack
      sx={[{flexWrap: 'wrap', gap: 10}, isDisplayTile && {flexDirection: 'row'}]}
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
    </Stack>
  )
}

export default List
