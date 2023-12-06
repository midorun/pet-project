import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'

import { DefaultTFuncReturn } from 'i18next'
import { FieldError } from 'react-hook-form'

import cn from 'shared/lib/cn'
import { PropsWithClassName } from 'shared/model/types'

export type InputProps = {
  label?: DefaultTFuncReturn | string
  error?: FieldError
} & InputHTMLAttributes<HTMLInputElement>

const Input: ForwardRefRenderFunction<
  HTMLInputElement,
  PropsWithClassName<InputProps>
> = (props, ref) => {
  const { error, label, className, ...rest } = props

  return (
    <div className={cn('flex w-min flex-col py-1')}>
      <div className="flex items-center gap-y-1">
        <label>{label}</label>
        <input
          className={cn('border px-2 py-1', {}, [className])}
          ref={ref}
          {...rest}
        />
      </div>
      {error && <span className="text-[var(--error)]">{error.message}</span>}
    </div>
  )
}

export default forwardRef(Input)
