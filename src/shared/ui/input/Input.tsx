import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'

import { DefaultTFuncReturn } from 'i18next'
import { FieldError } from 'react-hook-form'

import cn from 'shared/lib/cn'
import { PropsWithClassName } from 'shared/types'

import cns from './Input.module.scss'

type InputProps = {
  label?: DefaultTFuncReturn | string
  error?: FieldError
} & InputHTMLAttributes<HTMLInputElement>

const Input: ForwardRefRenderFunction<
  HTMLInputElement,
  PropsWithClassName<InputProps>
> = (props, ref) => {
  const { className, error, label, ...rest } = props

  return (
    <div className={cns.InputWrapper}>
      <div style={{ display: 'flex', gap: '0 4px', alignItems: 'center' }}>
        <label>{label}</label>
        <input
          ref={ref}
          className={cn(cns.Input, {}, [className])}
          {...rest}
        />
      </div>
      {error && <span className={cns.Error}>{error.message}</span>}
    </div>
  )
}

export default forwardRef(Input)
