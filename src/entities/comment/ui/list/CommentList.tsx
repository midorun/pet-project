import { FC } from 'react'

import { useParams } from 'react-router-dom'

import cn from 'shared/lib/cn'
import Error from 'shared/ui/error/Error'

import CommentListSkeleton from './CommentListSkeleton'

import { useGetComments } from '../../api/getComments'
import Comment from '../Comment'

const CommentList: FC = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetComments(id)

  if (isLoading) {
    return <CommentListSkeleton />
  }

  if (isError) {
    return <Error />
  }

  return (
    <div className={cn('space-y-3')}>
      {data.map((comment) => {
        return (
          <Comment
            key={comment.id}
            {...comment}
          />
        )
      })}
    </div>
  )
}

export default CommentList
