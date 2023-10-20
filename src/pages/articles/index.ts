import { lazy } from 'react'

export const ArticlesPage = lazy(() => import('./ui/ArticlesPage'))
export const ArticleDetailsPage = lazy(
  () => import('./ui/details/ArticleDetailsPage')
)
