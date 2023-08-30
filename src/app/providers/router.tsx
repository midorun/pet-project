import React, { lazy } from 'react'

import App from 'app'
import { createBrowserRouter } from 'react-router-dom'

import NotFoundPage from 'pages/NotFoundPage'

const About = lazy(async () => await import('pages/AboutPage'))
const Home = lazy(async () => await import('pages/HomePage'))

const router = createBrowserRouter([
  { path: '/*', element: <NotFoundPage /> },
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
])

export default router
