import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'

import { DefaultTFuncReturn } from 'i18next'
import { FieldError } from 'react-hook-form'

import { PropsWithClassName } from 'shared/model/types'

type InputProps = {
  label?: DefaultTFuncReturn | string
  error?: FieldError
} & InputHTMLAttributes<HTMLInputElement>

const Input: ForwardRefRenderFunction<
  HTMLInputElement,
  PropsWithClassName<InputProps>
> = (props, ref) => {
  const { error, label, ...rest } = props

  return (
    <div className="flex flex-col py-1">
      <div className="flex items-center gap-y-1">
        <label>{label}</label>
        <input
          ref={ref}
          {...rest}
        />
      </div>
      {error && <span className="text-[var(--error)]">{error.message}</span>}
    </div>
  )
}

export default forwardRef(Input)
