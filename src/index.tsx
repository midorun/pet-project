import { router } from 'app/router'
import ThemeProvider from 'context/ThemeProvider'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
)
