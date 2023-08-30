import React, { FC, PropsWithChildren } from 'react'

import cn from 'shared/lib/cn'
import { PropsWithClassName } from 'shared/types'

import cns from './Card.module.scss'

type CardProps = {}

const Card: FC<PropsWithClassName<PropsWithChildren<CardProps>>> = (props) => {
  const { children, className } = props

  return <div className={cn(cns.Card, {}, [className])}>{children}</div>
}

export default Card
