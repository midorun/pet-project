import React from 'react'

import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import ThemeProvider from 'app/providers/ThemeProvider'
import ErrorBoundary from 'app/providers/error-boundary'
import { router } from 'app/providers/router'

// eslint-disable-next-line
import 'shared/i18n'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ErrorBoundary>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </ErrorBoundary>
)
