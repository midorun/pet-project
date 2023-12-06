import { useEffect, useState } from 'react'

import { UseControllerProps, useController, FieldValues } from 'react-hook-form'
import { GroupBase, Props } from 'react-select'

import Select from './Select'
import { isMultiValue } from './lib/isMultiValue'
import { OptionType } from './model/types'

const SelectController = <
  TFieldValues extends FieldValues,
  Option extends OptionType,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: Props<Option, IsMulti> & UseControllerProps<TFieldValues>
) => {
  const { control, name, rules, isMulti } = props
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
    <Select
      {...props}
      value={value}
      onChange={changeHandler}
    />
  )
}

export default SelectController
