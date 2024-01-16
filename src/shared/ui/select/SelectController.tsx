import { useEffect, useState } from 'react'

import { UseControllerProps, useController, FieldValues } from 'react-hook-form'
import { GroupBase, Props } from 'react-select'

import Select from './Select'
import { isMultiValue } from './lib/isMultiValue'
import { OptionType } from './model/types'
import { Box, FormControl, FormHelperText, FormLabel, Typography } from '@mui/joy'
import { DefaultTFuncReturn } from 'i18next'

const SelectController = <
  TFieldValues extends FieldValues,
  Option extends OptionType,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: Props<Option, IsMulti> & UseControllerProps<TFieldValues> & {
    label?: string | DefaultTFuncReturn
    error?: string
  }
) => {
  const { control, name, rules, isMulti, error, label } = props
  const options = props.options as Option[] | []

  const { field, fieldState } = useController({ control, name, rules })

  const [value, setValue] = useState<Option | Option[] | null>(null)

  useEffect(() => {
    if (isMulti) {
      const value = options.filter((option) => option.value === field.value)

      setValue(value)
    }

    if (!isMulti) {
      const option = options.find((option) => option.value === field.value)

      if (option) {
        setValue(option)
      }
    }
  }, [])

  const changeHandler = (
    newValue: Option | readonly Option[] | null
    // actionMeta: ActionMeta<Option>
  ) => {
    if (isMultiValue(newValue)) {
      return
    }

    field.onChange(newValue?.value)
    setValue(newValue)
  }

  return (
    <FormControl error={fieldState.invalid}>
      <FormLabel>{label}</FormLabel>
      <Select
      {...props}
      value={value}
      onChange={changeHandler}
    />
    <FormHelperText>{error}</FormHelperText>
    </FormControl>
  )
}

export default SelectController
