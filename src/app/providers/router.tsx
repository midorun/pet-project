import React, { lazy, PropsWithChildren } from 'react'

import App from 'app'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'

import NotFoundPage from 'pages/NotFoundPage'

const About = lazy(async () => await import('pages/AboutPage'))
const Home = lazy(async () => await import('pages/HomePage'))

type ProtectedRouteProps = {
  isAllowed: boolean
  redirectPath: string
}
const ProtectedRoute = (props: PropsWithChildren<ProtectedRouteProps>) => {
  const { isAllowed, redirectPath, children } = props

  if (!isAllowed) {
    return (
      <Navigate
        to={redirectPath}
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
        path: 'home',
        element: <Home />,
      },
      { path: 'about', element: <About /> },
    ],
  },
])

export default router
