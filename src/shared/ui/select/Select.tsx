import { FC, Fragment, useState } from 'react'

import { Combobox } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

import cn from 'shared/lib/cn'

const people = [
  { value: 1, label: 'Wade Cooper' },
  { value: 2, label: 'Arlene Mccoy' },
  { value: 3, label: 'Devon Webb' },
  { value: 4, label: 'Tom Cook' },
  { value: 5, label: 'Tanya Fox' },
  { value: 6, label: 'Hellen Schmidt' },
]

type OptionType = {
  value: string
  label: string
}

type Props = {
  options: OptionType[]
}
const Select: FC<Props> = (props) => {
  const { options = people } = props

  const { t } = useTranslation()

  const [selected, setSelected] = useState(options[0])
  const [query, setQuery] = useState('')

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <Combobox
      value={selected}
      by={'value'}
      onChange={setSelected}
    >
      <Combobox.Input
        className="relative rounded-lg py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
        displayValue={(option) => option.label}
        onChange={(event) => setQuery(event.target.value)}
      />

      <Combobox.Options
        className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        unmount={false}
      >
        {filteredOptions.length === 0 && query !== '' ? (
          <div className="cursor-default select-none px-4 py-2 text-gray-700">
            {t(' Nothing found.')}
          </div>
        ) : (
          filteredOptions.map((option) => (
            <Combobox.Option
              key={option.value}
              className={({ active }) =>
                cn(`cursor-default select-none px-4 py-2 `, {
                  'hover:bg-gray-400': active,
                })
              }
              value={option}
            >
              {({ selected, active }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? 'font-medium' : 'font-normal'
                    } ${active ? ' text-black' : 'text-gray-900'}`}
                  >
                    {option.label}
                  </span>
                </>
              )}
            </Combobox.Option>
          ))
        )}
      </Combobox.Options>
    </Combobox>
  )
}

export default Select
