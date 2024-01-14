import { lazy } from 'react'

export const ArticlesPage = lazy(() => import('./ui/Page'))
export const ArticleDetailsPage = lazy(
  () => import('./ui/details-page/DetailsPage')
)
