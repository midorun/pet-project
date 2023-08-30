import React, { FC } from 'react'

import { useUser } from 'entities/user/model/hooks/useUser'

import { Loader } from 'shared/ui/loader/Loader'

export type UserProfileCardProps = {
  userId?: string
}

const UserProfileCard: FC<UserProfileCardProps> = (props) => {
  const { userId } = props

  const { data, isLoading, isError } = useUser(userId)

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <span>Error</span>
  }

  return (
    <div>
      <span>{data.username}</span>
    </div>
  )
}

export default UserProfileCard
