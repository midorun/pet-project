import React from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import ThemeProvider from 'app/providers/ThemeProvider'
import ErrorBoundary from 'app/providers/error-boundary'
import queryClient from 'app/providers/query-client'
import router from 'app/providers/router'

import 'shared/i18n'

import './index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {/*<RecoilizeDebugger />*/}
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ErrorBoundary>
)
