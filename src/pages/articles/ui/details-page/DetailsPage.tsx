import React, { FC } from 'react'

import { useGetArticleDetails, ArticleDetails } from 'entities/article'
import CommentList from 'entities/comment'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import AddComment from 'features/add-article-comment'

import { Loader } from 'shared/ui/loader/Loader'

const DetailsPage: FC = (props) => {
  const {} = props

  const { id } = useParams() as { id: string }
  const { t } = useTranslation()

  const { data, isSuccess } = useGetArticleDetails(id)

  if (!isSuccess) return <Loader />

  return (
    <>
      <ArticleDetails {...data} />

      <h3>{t('Комментарии')}</h3>

      <AddComment className="mb-3" />

      <CommentList />
    </>
  )
}

export default DetailsPage
