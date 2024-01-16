import { FC } from 'react'

import { ArticleList } from 'entities/article'
import { useTranslation } from 'react-i18next'

import cn from 'shared/lib/cn'

import Display from './display/ui/Display'
import Filters from './filters/ui/filters/Filters'
import { Typography } from '@mui/joy'

const Page: FC = (props) => {
  const {} = props

  const { t } = useTranslation()

  return (
    <div className={cn('gap-4 space-y-4')}>
      <Typography level='h2'>{t('Статьи')}</Typography>

      <Filters />

      <Display />

      <ArticleList />
    </div>
  )
}

export default Page
