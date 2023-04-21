import React, { FC, Suspense } from 'react'

import { Outlet } from 'react-router-dom'

import { useThemeContext } from 'app/providers/ThemeProvider'

import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'

import { cn } from 'shared/lib/cn'

import './styles/index.scss'

import cns from './App.module.scss'

const App: FC = () => {
  const { theme } = useThemeContext()

  return (
    <div className={cn('app', {}, [theme])}>
      <header className={cn(cns.header)}>
        <Navbar />
      </header>

      <main className={cn(cns.main)}>
        <Sidebar />
        <Suspense fallback={<span>Loading...</span>}>
          <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </div>
  )
}

export default App
