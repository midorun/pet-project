import ReactSelect, { GroupBase, Props } from 'react-select'

import type {} from 'react-select/base'
import DropdownIndicator from './ui/DropdownIndicator'

// This import is necessary for module augmentation.
// It allows us to extend the 'Props' interface in the 'react-select/base' module
// and add our custom property 'myCustomProp' to it.
declare module 'react-select/base' {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>,
  > {}
}

const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: Props<Option, IsMulti, Group>
) => {
  const { loadOptions } = props

  return (
    <ReactSelect
      {...props}
      placeholder="Введите или выберите"
      closeMenuOnSelect={props.isMulti}
      styles={{
        valueContainer(base) {
          return {
            ...base,
          }
        },
        control(base) {
          return {
            ...base,
            // padding: '4px 12px',
            maxHeight: 40,
          }
        },
        input(base) {
          return {
            ...base,
          }
        },
        multiValue(base) {
          return {
            ...base,
          }
        },
      }}
      components={{
        IndicatorSeparator: () => null,
        // @ts-expect-error
        DropdownIndicator,
      }}
    />
  )
}

export default Select
