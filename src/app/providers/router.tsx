import React, { lazy, PropsWithChildren } from 'react'

import App from 'app'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { ArticlesPage } from 'pages/articles'
import ArticleDetailsPage from 'pages/articles/details/ui/ArticleDetailsPage'
import NotFoundPage from 'pages/not-found-page'

import { authAtom } from 'entities/user/model/authAtom'

const About = lazy(async () => await import('pages/AboutPage'))
const Home = lazy(async () => await import('pages/HomePage'))

const AuthorizedRoute = (props: PropsWithChildren) => {
  const { children } = props

  const isAuth = useRecoilValue(authAtom)

  if (!isAuth) {
    return (
      <Navigate
        to={'/about'}
        replace
      />
    )
  }

  return children ? <>{children}</> : <Outlet />
}

const router = createBrowserRouter([
  { path: '/*', element: <NotFoundPage /> },
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: (
          <AuthorizedRoute>
            <Outlet />
          </AuthorizedRoute>
        ),
        children: [
          { path: 'home', element: <Home /> },
          { path: 'articles', element: <ArticlesPage /> },
          { path: 'articles/:id', element: <ArticleDetailsPage /> },
        ],
      },
      { path: 'about', element: <About /> },
    ],
  },
])

export default router
