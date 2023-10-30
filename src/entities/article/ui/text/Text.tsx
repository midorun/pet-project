import React, { FC } from 'react'

import { TextBlock } from 'entities/article/model/articleDetails'

import cn from 'shared/lib/cn'

export type TextProps = TextBlock

const Text: FC<TextProps> = (props) => {
  const { paragraphs } = props

  return (
    <div className={cn('space-y-3')}>
      {paragraphs.map((paragraph, idx) => {
        return <p key={idx}>{paragraph}</p>
      })}
    </div>
  )
}

export default Text
