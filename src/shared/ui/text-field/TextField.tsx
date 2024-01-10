import React, {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

import { FormControl, FormLabel, FormHelperText, Input } from '@mui/joy'
import { DefaultTFuncReturn } from 'i18next'

export type TextFieldProps = {
  label?: DefaultTFuncReturn | string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  props,
  ref
) => {
  const { error, label, ...rest } = props

  return (
    <FormControl error={!!error}>
      <FormLabel>{label}</FormLabel>
      <Input
        slotProps={{
          input: { ref, ...rest },
        }}
      />

      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  )
}

export default forwardRef(TextField)
