import React, { FC } from 'react'

import { ImageBlock } from 'entities/article/model/articleDetails'

import cn from 'shared/lib/cn'

import cns from './Image.module.scss'

export type ImageProps = ImageBlock

const Image: FC<ImageProps> = (props) => {
  const { src, title } = props

  return (
    <div className={cn(cns.Image)}>
      <img
        src={src}
        alt={title}
      />
      <span>{title}</span>
    </div>
  )
}

export default Image
