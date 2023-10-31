import { FC } from 'react'

import { useParams } from 'react-router-dom'

import cn from 'shared/lib/cn'
import Error from 'shared/ui/error/Error'
import Loader from 'shared/ui/loader/Loader'

import { useGetComments } from '../../api/getComments'
import Comment from '../Comment'

const CommentList: FC = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetComments(id)

  if (isLoading) {
    return <Loader />
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
