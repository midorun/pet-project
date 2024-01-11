import React, { FC } from 'react'

import { Stack, Typography } from '@mui/joy'

import { ViewsIcon } from 'shared/assets/icons'
import cn from 'shared/lib/cn'

import {
  ArticleDetailsType,
  ArticleDetailsBlockEnum,
} from '../../model/articleDetails'
import Code from '../code/Code'
import Image from '../image/Image'
import Text from '../text/Text'

export type ArticleProps = ArticleDetailsType

export const blocksMap = {
  [ArticleDetailsBlockEnum.TEXT]: Text,
  [ArticleDetailsBlockEnum.CODE]: Code,
  [ArticleDetailsBlockEnum.IMAGE]: Image,
}

const Details: FC<ArticleProps> = (props) => {
  const { blocks, createdAt, img, subtitle, title, type, views } = props

  return (
    <Stack
      direction={'column'}
      gap={2}
    >
      <div className={cn('flex flex-col gap-x-3')}>
        <img
          className={cn('w5 h-52 w-52 self-center')}
          src={img}
          alt={title}
        />
        <Typography level="h1">{title}</Typography>
        <Typography level="h3">{subtitle}</Typography>

        <Typography
          level="body-sm"
          startDecorator={<ViewsIcon />}
        >
          {views}
        </Typography>
        <Typography level="body-sm">{createdAt}</Typography>
      </div>

      {blocks.map((block) => {
        const el = blocksMap[block.type]
        //@ts-expect-error
        return <div key={block.id}>{el(block)}</div>
      })}
    </Stack>
  )
}

export default Details
