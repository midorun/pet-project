import App from 'app/index'
// import About from 'pages/About'
// import Home from 'pages/Home'

import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const About = lazy(async () => await import('pages/About'))
const Home = lazy(async () => await import('pages/Home'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
])
