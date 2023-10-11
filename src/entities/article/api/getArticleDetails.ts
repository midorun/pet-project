import { useQuery } from '@tanstack/react-query'

import { ArticleDetails } from 'entities/article/model/articleDetails'

import rest from 'shared/api'

const getArticleDetails = async (id?: string) => {
  const res = await rest.get<ArticleDetails>(`/articles/${id}`)

  return res.data
}

export const useGetArticleDetails = (id?: string) => {
  return useQuery({
    queryKey: [getArticleDetails.name, id],
    queryFn: () => getArticleDetails(id),
    enabled: !!id,
  })
}
