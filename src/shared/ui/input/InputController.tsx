import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import Input, { InputProps } from './Input'

const InputController = <T extends FieldValues>(
  props: InputProps & UseControllerProps<T>
) => {
  const {} = props

  const { field } = useController(props)

  return (
    <Input
      {...props}
      {...field}
    />
  )
}

export default InputController
