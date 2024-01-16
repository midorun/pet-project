import React, { FC } from 'react'

import { Stack, Typography } from '@mui/joy'
import { useGetArticleDetails, ArticleDetails } from 'entities/article'
import CommentList from 'entities/comment'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import AddComment from 'features/add-article-comment'

import DetailsPageSkeleton from './DetailsPageSkeleton'

const DetailsPage: FC = (props) => {
  const {} = props

  const { id } = useParams() as { id: string }
  const { t } = useTranslation()

  const { data, isSuccess } = useGetArticleDetails(id)
  // const bool = true
  // if (bool) return <DetailsPageSkeleton />

  if (!isSuccess) return <DetailsPageSkeleton />

  return (
    <Stack gap={4}>
      <ArticleDetails {...data} />

      <Typography level="title-lg">{t('Комментарии')}</Typography>

      <AddComment className="mb-3" />

      <CommentList />
    </Stack>
  )
}

export default DetailsPage
