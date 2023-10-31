import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import cn from 'shared/lib/cn'
import { UIVariantEnum } from 'shared/model/types'

const variants: Record<UIVariantEnum, string> = {
  [UIVariantEnum.PRIMARY]:
    'py-2 px-3 border border-solid border-[var(--inverted-primary-color)] bg-none',
  [UIVariantEnum.SECONDARY]: 'p-0 border-none bg-none outline-none',
  [UIVariantEnum.TERTIARY]: '',
}

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
      className={cn('cursor-pointer text-[var(--inverted-primary-color)]', {}, [
        className,
        variants[variant],
      ])}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
