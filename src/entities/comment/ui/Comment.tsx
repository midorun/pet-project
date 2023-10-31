import { FC } from 'react'

import { useGetUser } from '@entities/user'

import cn from 'shared/lib/cn'
import { Loader } from 'shared/ui/loader/Loader'

import { CommentType } from '../model/comment'

type CommentProps = CommentType

const Comment: FC<CommentProps> = (props) => {
  const { text, userId } = props

  const { data, isLoading, isError } = useGetUser(userId)

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return null
  }

  return (
    <div
      className={cn(
        'flex flex-col border border-solid border-[var(--primary-color)] p-5'
      )}
    >
      <span>{data?.username}</span>
      <span>{text}</span>
    </div>
  )
}

export default Comment
