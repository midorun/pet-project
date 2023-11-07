import { useQuery } from '@tanstack/react-query'

import rest from 'shared/api'

import { ArticleType } from '../model/article'
import { ArticleDetailsType } from '../model/articleDetails'

export type ArticlesFiltersType = {
  order: 'asc' | 'desc'
  sort: keyof Pick<ArticleDetailsType, 'title' | 'views' | 'createdAt'>
  title: string
}

export type Args = {
  params: ArticlesFiltersType
}

const getArticles = async (args: Args) => {
  const res = await rest.get<ArticleType[]>('/articles', {
    params: {
      _sort: args.params.sort,
      _order: args.params.order,
      title_like: args.params.title,
    },
  })

  return res.data
}

export const useGetArticles = (args: Args) => {
  return useQuery({
    queryKey: [getArticles.name, args],
    queryFn: () => getArticles(args),
  })
}
