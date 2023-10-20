import React, { FC, Suspense } from 'react'

import { Outlet } from 'react-router-dom'

import { useThemeContext } from 'app/providers/ThemeProvider'

import Header from 'widgets/header'
import PageLoader from 'widgets/page-loader'
import Sidebar from 'widgets/sidebar'

import cn from 'shared/lib/cn'

const App: FC = () => {
  const { theme } = useThemeContext()

  return (
    <div className={cn('app', {}, [theme])}>
      <Header />

      <main className={cn('relative flex')}>
        <Sidebar />

        <Suspense fallback={<PageLoader />}>
          <div className={cn('px-4 py-3')}>
            <Outlet />
          </div>
        </Suspense>
      </main>

      <footer></footer>
    </div>
  )
}

export default App
