import { FC, useRef } from 'react'

import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import queryClient from 'app/providers/query-client'

import { useGetCurrentUser } from 'entities/user/api/useGetCurrentUser'

import cn from 'shared/lib/cn'
import { PropsWithClassName, UIVariantEnum } from 'shared/types'
import Button from 'shared/ui/button/Button'

import { useCreateComment } from '../api/createComment'

type AddCommentProps = {}

const AddComment: FC<PropsWithClassName<AddCommentProps>> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const ref = useRef<HTMLTextAreaElement>(null)
  const { id } = useParams() as { id: string }

  const { data: currentUser } = useGetCurrentUser()

  const createComment = useCreateComment()

  const postComment = () => {
    if (ref.current) {
      createComment.mutate(
        { text: ref.current.value, userId: currentUser!.id, articleId: id },
        {
          onSuccess: () => {
            //@ts-expect-error
            ref.current.value = ''
            queryClient.refetchQueries(['getComments', id])
          },
        }
      )
    }
  }

  return (
    <div
      className={cn(
        'flex flex-1 justify-between space-x-3 border border-solid p-4',
        {},
        [className]
      )}
    >
      <textarea
        className="w-full outline-none"
        placeholder={t('Введите текст комментария') as string}
        ref={ref}
      ></textarea>
      <Button
        variant={UIVariantEnum.PRIMARY}
        onClick={postComment}
      >
        {t('Отправить')}
      </Button>
    </div>
  )
}

export default AddComment
