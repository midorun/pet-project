import React from 'react'

import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import TextField, { TextFieldProps } from './TextField'

const TextFieldController = <T extends FieldValues>(
  props: TextFieldProps & UseControllerProps<T>
) => {
  const { name } = props

  const {
    field,
    formState: { errors },
  } = useController(props)

  return (
    <TextField
      {...props}
      {...field}
      error={errors[name]?.message as string} //TODO
    />
  )
}

export default TextFieldController
