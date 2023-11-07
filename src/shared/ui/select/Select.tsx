import { FC, SelectHTMLAttributes } from 'react'

import { useTranslation } from 'react-i18next'

type OptionType = {
  value: string
  label: string
}

type Props = {
  options: OptionType[]
} & SelectHTMLAttributes<HTMLSelectElement>

const Select: FC<Props> = (props) => {
  const { options, ...rest } = props
  const { t } = useTranslation()
  return (
    <select
      className="outline-none"
      {...rest}
    >
      {options.map((option) => {
        return (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        )
      })}
    </select>
  )
}

export default Select
