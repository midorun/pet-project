import { FC } from 'react'

import { useTranslation } from 'react-i18next'

import cn from 'shared/lib/cn'

type FiltersProps = object

const Filters: FC<FiltersProps> = (props) => {
  const {} = props
  const { t } = useTranslation()

  return (
    <div className={cn('')}>
      <div>
        <span>{t('Сортировать по')}</span>
      </div>
    </div>
  )
}

export default Filters
