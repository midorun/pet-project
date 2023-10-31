import { lazy } from 'react'

export const ArticlesPage = lazy(() => import('./ui/page/Page'))
export const ArticleDetailsPage = lazy(
  () => import('./ui/details-page/DetailsPage')
)
