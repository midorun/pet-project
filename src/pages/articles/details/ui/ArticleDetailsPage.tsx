import React, { FC } from 'react'

import { useParams } from 'react-router-dom'

import { ArticleDetails } from 'entities/article'
import { useGetArticleDetails } from 'entities/article/api/getArticleDetails'
import { Comment } from 'entities/coment'
import { useGetComments } from 'entities/coment/api/getComments'

import { Loader } from 'shared/ui/loader/Loader'
import cn from 'shared/lib/cn'
import cns from './ArticleDetailsPage.module.scss'

const ArticleDetailsPage: FC = (props) => {
  const {} = props

  const { id } = useParams() as { id: string }

  const { data, isSuccess } = useGetArticleDetails(id)
  const { data: comments, isSuccess: isSuccessComments } = useGetComments(id)

  if (!isSuccess) return <Loader />

  return (
    <div className={cn(cns.ArticleDetailsPage)}>
      <ArticleDetails {...data} />

      <div className={cn(cns.comments)}>
        {comments?.map((comment) => {
          return (
            <Comment
              key={comment.id}
              {...comment}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ArticleDetailsPage
