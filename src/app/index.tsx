import { useThemeContext } from 'app/providers/ThemeProvider'
import React, { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { cn } from 'shared/lib/cn'
import { Navbar } from 'widgets/navbar'

import './styles/index.scss'
import { ThemeSwitch } from 'features/theme-switch'

const App: FC = () => {
  const { theme } = useThemeContext()

  return (
    <div className={cn('app', {}, [theme])}>
      <Navbar />
      <ThemeSwitch />

      <Suspense fallback={<span>Loading...</span>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default App
