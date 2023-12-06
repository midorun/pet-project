import { FC } from 'react'

import { DropdownIndicatorProps } from 'react-select'

import { ArrowDownIcon } from 'shared/assets/icons'
import cn from 'shared/lib/cn'

const DropdownIndicator: FC<DropdownIndicatorProps> = (props) => {
  const { innerProps, selectProps } = props

  return (
    <div
      {...innerProps}
      className="p-2"
    >
      <ArrowDownIcon
        className={cn('fill-[#797D86] stroke-none transition-transform', {
          'rotate-180 fill-[#2563eb]': selectProps.menuIsOpen,
        })}
      />
    </div>
  )
}

export default DropdownIndicator
