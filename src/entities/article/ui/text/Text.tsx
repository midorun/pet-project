import React, { FC } from 'react'

import { TextBlock } from 'entities/article/model/articleDetails'

import cn from 'shared/lib/cn'

import cns from './Text.module.scss'
export type TextProps = TextBlock

const Text: FC<TextProps> = (props) => {
  const { paragraphs } = props

  return (
    <>
      {paragraphs.map((paragraph, idx) => {
        return (
          <p
            className={cn(cns.Text)}
            key={idx}
          >
            {paragraph}
          </p>
        )
      })}
    </>
  )
}

export default Text
