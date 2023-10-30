import { FC } from 'react'

import cn from 'shared/lib/cn'

import { ArticleType } from '../../model/article'
import ArticleCard from '../card/ArticleCard'

type ListProps = {
  data: ArticleType[]
}

const List: FC<ListProps> = (props) => {
  const { data } = props

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
