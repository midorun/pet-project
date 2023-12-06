import { GroupBase } from 'react-select'

import { OptionType } from '../model/types'

export const isGroup = <
  Option extends OptionType,
  Group extends GroupBase<Option>,
>(
  option: Option | Group
): option is Group => {
  if ('options' in option) {
    return true
  } else {
    return false
  }
}
