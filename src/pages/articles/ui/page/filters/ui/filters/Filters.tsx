import { ChangeEvent, FC, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { useRecoilState } from 'recoil'

import cn from 'shared/lib/cn'
import { useDebouncedCb } from 'shared/lib/hooks/useDebouncedCb'
import Input from 'shared/ui/input/Input'
import Select from 'shared/ui/select/Select'

import { articlesFiltersAtom } from '../../model/filtersAtom'

type FiltersProps = object

const orderOptions = [
  { value: 'asc', label: 'asc' },
  { value: 'desc', label: 'desc' },
]

const sortOptions = [
  { value: 'createdAt', label: 'дате создания' },
  { value: 'views', label: 'просмотрам' },
  { value: 'title', label: 'названию' },
]

const Filters: FC<FiltersProps> = (props) => {
  const {} = props
  const { t } = useTranslation()

  const [filtersState, setFiltersState] = useRecoilState(articlesFiltersAtom)

  const [search, setSearch] = useState(filtersState.title ?? '')

  useDebouncedCb(() => {
    setFiltersState({
      ...filtersState,
      title: search,
    })
  }, [search])

  const titleOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setFiltersState({
      order: 'asc',
      sort: 'createdAt',
      title: '',
    })
  }, [])

  return (
    <div className={cn('')}>
      <div>
        <span>{t('Сортировать по')}</span>
        <Select
          name={'order'}
          id="order"
          options={orderOptions}
          value={filtersState.order}
          onChange={(e) =>
            setFiltersState({
              ...filtersState,
              [e.target.name]: e.target.value,
            })
          }
        />
      </div>
      <div>
        <span>{t('Сортировать по')}</span>
        <Select
          name={'sort'}
          id="sort"
          options={sortOptions}
          value={filtersState.sort}
          onChange={(e) =>
            setFiltersState({
              ...filtersState,
              [e.target.name]: e.target.value,
            })
          }
        />
      </div>

      <div className="flex items-center space-x-1">
        <span>{t('Название')}</span>
        <Input
          name="title"
          placeholder="Введите название"
          value={search}
          onChange={titleOnChangeHandler}
          className="w-[200px]"
        />
      </div>
    </div>
  )
}

export default Filters
