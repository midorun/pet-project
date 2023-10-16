import { useQuery } from '@tanstack/react-query'

import rest from 'shared/api'

import { ArticleType } from '../model/article'

const getArticles = async () => {
  const res = await rest.get<ArticleType[]>('/articles')

  return res.data
}

export const useGetArticles = () => {
  return useQuery({
    queryKey: [getArticles.name],
    queryFn: () => getArticles(),
  })
}
