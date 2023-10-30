import {
  Dispatch,
  FC,
  Fragment,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

import { Combobox } from '@headlessui/react'

import cn from 'shared/lib/cn'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
]

const Select = () => {
  const [selected, setSelected] = useState('')
  const [query, setQuery] = useState('')

  console.log(query)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  console.log(filteredPeople.length)

  return (
    <div className="w-72">
      <Combobox
        value={selected}
        by={'id'}
        onChange={setSelected}
      >
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2"></Combobox.Button>
          </div>

          <Combobox.Options
            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            unmount={false}
          >
            {filteredPeople.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  className={({ active }) =>
                    cn(`relative cursor-default select-none px-4 py-2 `, {
                      'hover:bg-gray-400': active,
                    })
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        } ${active ? ' text-black' : 'text-gray-900'}`}
                      >
                        {person.name}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  )
}

export default Select

type ControllerProps = {
  open: boolean
  setQuery: Dispatch<SetStateAction<string>>
}

const Controller: FC<PropsWithChildren<ControllerProps>> = (props) => {
  const { children, open, setQuery } = props

  useEffect(() => {
    if (!open) {
      setQuery('')
    }
  }, [open])

  return <>{children}</>
}
