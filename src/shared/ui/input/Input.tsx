import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'

import { FieldError } from 'react-hook-form'

import cn from 'shared/lib/cn'
import { PropsWithClassName } from 'shared/types'

import cns from './Input.module.scss'

type InputProps = {
  error?: FieldError
} & InputHTMLAttributes<HTMLInputElement>

const Input: ForwardRefRenderFunction<
  HTMLInputElement,
  PropsWithClassName<InputProps>
> = (props, ref) => {
  const { className, error, ...rest } = props

  return (
    <div className={cns.InputWrapper}>
      <input
        ref={ref}
        className={cn(cns.Input, {}, [className])}
        {...rest}
      />
      {error && <span className={cns.Error}>{error.message}</span>}
    </div>
  )
}

export default forwardRef(Input)
