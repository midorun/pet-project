import React, { FC } from 'react'

import { useParams } from 'react-router-dom'

import { ArticleDetails } from 'entities/article'
import { useGetArticleDetails } from 'entities/article/api/getArticleDetails'

import { Loader } from 'shared/ui/loader/Loader'

const ArticleDetailsPage: FC = (props) => {
  const {} = props

  const { id } = useParams() as { id: string }

  const { data, isSuccess } = useGetArticleDetails(id)

  if (!isSuccess) return <Loader />

  return <ArticleDetails {...data} />
}

export default ArticleDetailsPage
