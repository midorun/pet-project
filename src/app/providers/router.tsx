import React, { PropsWithChildren } from 'react'

import App from 'app'
import {
  AboutPage,
  ArticlesPage,
  ArticleDetailsPage,
  HomePage,
  NotFoundPage,
} from 'pages'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { authAtom } from 'entities/user/model/authAtom'

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
          { path: 'home', element: <HomePage /> },
          { path: 'articles', element: <ArticlesPage /> },
          { path: 'articles/:id', element: <ArticleDetailsPage /> },
        ],
      },
      { path: 'about', element: <AboutPage /> },
    ],
  },
])

export default router
