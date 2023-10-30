import { FC } from 'react'

import { useTranslation } from 'react-i18next'

import { useGetUser } from 'entities/user/api/useGetUser'

import cn from 'shared/lib/cn'
import { Loader } from 'shared/ui/loader/Loader'

import { CommentType } from '../model/comment'

type CommentProps = CommentType

const Comment: FC<CommentProps> = (props) => {
  const { articleId, id, text, userId } = props
  const { t } = useTranslation()

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
