import { FC } from 'react'

import { useTranslation } from 'react-i18next'

import cn from 'shared/lib/cn'
import Select from 'shared/ui/select/Select'

type FiltersProps = {}

const Filters: FC<FiltersProps> = (props) => {
  const {} = props
  const { t } = useTranslation()

  return (
    <div className={cn('')}>
      <div>
        <span>{t('Сортировать по')}</span>
        <Select />
      </div>
    </div>
  )
}

export default Filters
