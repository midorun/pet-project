import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import { cn } from 'shared/lib/cn'
import { UIVariantEnum } from 'shared/types'

import cns from './Button.module.scss'

type ButtonProps = {
  variant?: UIVariantEnum
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    children,
    className,
    variant = UIVariantEnum.TERTIARY,
    ...rest
  } = props

  return (
    <button
      className={cn(cns.Button, {}, [className, cns[variant]])}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
