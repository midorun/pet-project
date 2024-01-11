import { FC, useRef } from 'react'
import React from 'react'

import { Box, Button, Divider, FormControl, Textarea } from '@mui/joy'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import queryClient from 'app/providers/query-client'

import { useGetCurrentUser } from '@entities/user'

import { PropsWithClassName } from 'shared/model/types'

import { useCreateComment } from '../api/createComment'

type AddCommentProps = object

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
    <FormControl>
      <Textarea
        minRows={3}
        variant="outlined"
        placeholder={t('Введите текст комментария') as string}
        slotProps={{
          textarea: { ref },
        }}
        endDecorator={
          <Box
            gap={1}
            display={'flex'}
            flexDirection={'column'}
            flex={'auto'}
          >
            <Divider />
            <Button
              size="lg"
              sx={{
                ml: 'auto',
              }}
              onClick={postComment}
            >
              {t('Отправить')}
            </Button>
          </Box>
        }
      />
    </FormControl>
  )
}

export default AddComment
