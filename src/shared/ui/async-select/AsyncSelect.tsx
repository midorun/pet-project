import { useTranslation } from 'react-i18next'
import ReactSelect, { GroupBase, Props } from 'react-select'

import type {} from 'react-select/base'
// This import is necessary for module augmentation.
// It allows us to extend the 'Props' interface in the 'react-select/base' module
// and add our custom property 'myCustomProp' to it.

declare module 'react-select/base' {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>,
  > {
    loadOptions?: () => void
  }
}

const SelectV2 = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: Props<Option, IsMulti, Group>
) => {
  const { loadOptions } = props
  const { t } = useTranslation()

  return <ReactSelect {...props} />
}

export default SelectV2
