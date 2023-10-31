import React, { FC } from 'react'

import cn from 'shared/lib/cn'

import { ImageBlock } from '../../model/articleDetails'

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
