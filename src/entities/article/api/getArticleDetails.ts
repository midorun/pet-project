import { useQuery } from '@tanstack/react-query'

import { ArticleDetailsType } from 'entities/article/model/articleDetails'

import rest from 'shared/api'

const getArticleDetails = async (id?: string) => {
  const res = await rest.get<ArticleDetailsType>(`/articles/${id}`)

  return res.data
}

export const useGetArticleDetails = (id?: string) => {
  return useQuery({
    queryKey: [getArticleDetails.name, id],
    queryFn: () => getArticleDetails(id),
    enabled: !!id,
  })
}
