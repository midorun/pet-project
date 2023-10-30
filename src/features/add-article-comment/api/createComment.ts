import { useMutation } from '@tanstack/react-query'

import { CommentType } from 'entities/comment'

import rest from 'shared/api'

type ParamsType = Omit<CommentType, 'id'>

const createComment = async (params: ParamsType) => {
  const res = await rest.post('/comments', params)

  return res.data
}

export const useCreateComment = () => {
  return useMutation({
    mutationFn: (variables: ParamsType) => createComment(variables),
  })
}
