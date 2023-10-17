import { useQuery } from '@tanstack/react-query'

import rest from 'shared/api'

import { CommentType } from '../model/comment'

const getComments = async (id: string) => {
  const res = await rest.get<CommentType[]>('/comments', {
    params: { articleId: id },
  })

  return res.data
}

export const useGetComments = (id: string) => {
  return useQuery({
    queryKey: [getComments.name, id],
    queryFn: () => getComments(id),
    enabled: !!id,
  })
}
