import { FC, useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useRecoilState } from 'recoil'

import cn from 'shared/lib/cn'
import { useDebouncedCb } from 'shared/lib/hooks/useDebouncedCb'
import InputController from 'shared/ui/input/InputController'
import SelectController from 'shared/ui/select/SelectController'

import { articlesFiltersAtom } from '../../model/filtersAtom'

const orderOptions = [
  { value: 'asc', label: 'asc' },
  { value: 'desc', label: 'desc' },
]

const sortOptions = [
  { value: 'createdAt', label: 'дате создания' },
  { value: 'views', label: 'просмотрам' },
  { value: 'title', label: 'названию' },
]

type FiltersFormDefaultValues = {
  order: string
  sort: string
  title: string
}

const defaultValues: FiltersFormDefaultValues = {
  order: '',
  sort: '',
  title: '',
}

const Filters: FC = () => {
  const { t } = useTranslation()

  const { control, getValues, watch } = useForm<FiltersFormDefaultValues>({
    defaultValues,
  })
  const [articleFilters, setArticlesFilters] =
    useRecoilState(articlesFiltersAtom)

  console.log(articleFilters)

  const { order, sort, title } = watch()

  useEffect(() => {
    // @ts-expect-error
    setArticlesFilters({ ...articleFilters, order, sort })
  }, [order, sort])

  useDebouncedCb(
    () => setArticlesFilters({ ...articleFilters, title }),
    [title]
  )

  return (
    <form className={cn('')}>
      <div>
        <span>{t('Сортировать по')}</span>
        <SelectController
          control={control}
          name={'order'}
          options={orderOptions}
        />
      </div>
      <div>
        <span>{t('Сортировать по')}</span>
        <SelectController
          control={control}
          name={'sort'}
          options={sortOptions}
        />
      </div>

      <div className="flex items-center space-x-1">
        <span>{t('Название')}</span>
        <InputController
          control={control}
          name="title"
          placeholder="Введите название"
          className="w-[200px]"
        />
      </div>
    </form>
  )
}

export default Filters
