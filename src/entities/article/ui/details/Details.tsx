import React, { FC } from 'react'

import { ViewsIcon } from 'shared/assets/icons'
import cn from 'shared/lib/cn'
import TextWithIcon from 'shared/ui/text-with-icon/TextWithIcon'

import {
  ArticleDetailsType,
  ArticleDetailsBlockEnum,
} from '../../model/articleDetails'
import Code from '../code/Code'
import Image from '../image/Image'
import Text from '../text/Text'

export type ArticleProps = ArticleDetailsType

const blocksMap = {
  [ArticleDetailsBlockEnum.TEXT]: Text,
  [ArticleDetailsBlockEnum.CODE]: Code,
  [ArticleDetailsBlockEnum.IMAGE]: Image,
}

const Details: FC<ArticleProps> = (props) => {
  const { blocks, createdAt, img, subtitle, title, type, views } = props

  return (
    <div className={cn('flex flex-col')}>
      <div className={cn('flex flex-col gap-x-3')}>
        <img
          className={cn('w5 h-52 w-52 self-center')}
          src={img}
          alt={title}
        />
        <h1>{title}</h1>
        <h3>{subtitle}</h3>

        <TextWithIcon
          icon={ViewsIcon}
          text={views.toString()}
        />
        <div>
          <span>{createdAt}</span>
        </div>
      </div>

      {blocks.map((block) => {
        const el = blocksMap[block.type]
        //@ts-expect-error
        return <div key={block.id}>{el(block)}</div>
      })}
    </div>
  )
}

export default Details
