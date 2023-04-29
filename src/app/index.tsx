import React, { FC, Suspense } from 'react'

import { Outlet } from 'react-router-dom'

import { useThemeContext } from 'app/providers/ThemeProvider'

import Navbar from 'widgets/navbar'
import PageLoader from 'widgets/page-loader'
import Sidebar from 'widgets/sidebar'

import { cn } from 'shared/lib/cn'

import './styles/index.scss'

import cns from './App.module.scss'

const App: FC = () => {
  const { theme } = useThemeContext()

  // useEffect(() => {
  //   throw new Error('some error')
  // }, [])

  return (
    <div className={cn('app', {}, [theme])}>
      <header className={cn(cns.header)}>
        <Navbar />
      </header>

      <main className={cn(cns.main)}>
        <Sidebar />
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </div>
  )
}

export default App
