import React, { FC } from 'react'

import cn from 'shared/lib/cn'

import cns from './Details.module.scss'

import {
  ArticleDetails,
  ArticleDetailsBlockEnum,
} from '../../model/articleDetails'
import Code from '../code/Code'
import Image from '../image/Image'
import Text from '../text/Text'

export type ArticleProps = ArticleDetails

const blocksMap = {
  [ArticleDetailsBlockEnum.TEXT]: Text,
  [ArticleDetailsBlockEnum.CODE]: Code,
  [ArticleDetailsBlockEnum.IMAGE]: Image,
}

const Details: FC<ArticleProps> = (props) => {
  const { blocks } = props

  return (
    <div className={cn(cns.Details)}>
      {blocks.map((block) => {
        const el = blocksMap[block.type]
        //@ts-expect-error
        return <div key={block.id}>{el(block)}</div>
      })}
    </div>
  )
}

export default Details
