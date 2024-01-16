import { FC } from 'react'

import { Card, Skeleton, Typography } from '@mui/joy'

import { useGetUser } from '@entities/user'

import { CommentType } from '../model/comment'

type CommentProps = CommentType

const Comment: FC<CommentProps> = (props) => {
  const { text, userId } = props

  const { data, isLoading, isError } = useGetUser(userId)

  if (isError) {
    return null
  }

  return (
    <Card>
      <Typography>
        {isLoading ? (
          <Skeleton>Consectetur incididunt.</Skeleton>
        ) : (
          data.username
        )}
      </Typography>
      <Typography>{text}</Typography>
    </Card>
  )
}

export default Comment
