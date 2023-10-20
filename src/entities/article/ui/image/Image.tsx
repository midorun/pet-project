import React, { FC } from 'react'

import { ImageBlock } from 'entities/article/model/articleDetails'

import cn from 'shared/lib/cn'

export type ImageProps = ImageBlock

const Image: FC<ImageProps> = (props) => {
  const { src, title } = props

  return (
    <div className={cn('flex flex-col items-center')}>
      <img
        src={src}
        alt={title}
      />
      <span>{title}</span>
    </div>
  )
}

export default Image
