import { useThemeContext } from 'app/providers/ThemeProvider'
import React, { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { cn } from 'shared/lib/cn'
import { Navbar } from 'widgets/navbar'

import './styles/index.scss'

const App: FC = (props) => {
  const {} = props

  const { theme, toggleTheme } = useThemeContext()

  return (
    <div className={cn('app', {}, theme)}>
      <Navbar />
      <button onClick={toggleTheme}>Toggle theme</button>

      <Suspense fallback={<span>Loading...</span>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default App
