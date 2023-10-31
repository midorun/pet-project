import React, { FC, PropsWithChildren } from 'react'

import cn from 'shared/lib/cn'
import { PropsWithClassName } from 'shared/model/types'

type CardProps = {
  onClick?: () => void
}

const Card: FC<PropsWithClassName<PropsWithChildren<CardProps>>> = (props) => {
  const { children, className, onClick } = props

  return (
    <div
      className={cn(
        'rounded-2xl border border-solid border-[var(--primary-color)] p-4 shadow-md',
        {},
        [className]
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card
