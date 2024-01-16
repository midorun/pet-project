import React, { FC } from 'react'

import { Stack } from '@mui/joy'

import Header from './header/Header'

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
  const { blocks, id, ...headerProps } = props

  return (
    <Stack
      direction={'column'}
      gap={2}
    >
      <Header {...headerProps} />

      {blocks.map((block) => {
        const el = blocksMap[block.type]
        //@ts-expect-error
        return <div key={block.id}>{el(block)}</div>
      })}
    </Stack>
  )
}

export default Details
