import { FC } from 'react'

import { Card, Typography } from '@mui/joy'

import { useGetUser } from '@entities/user'

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
    <Card>
      <Typography>{data.username}</Typography>
      <Typography>{text}</Typography>
    </Card>
  )
}

export default Comment
