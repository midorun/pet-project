import { useThemeContext } from 'context/ThemeProvider'
import React, { FC, Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'

import '../styles/index.scss'

const App: FC = (props) => {
  const {} = props

  const { theme, toggleTheme } = useThemeContext()

  return (
    <div className={`app ${theme}`}>
      <Link to={'/home'}>Home</Link>
      <Link to={'/about'}>About</Link>

      <button onClick={toggleTheme}>Toggle theme</button>
      <Suspense fallback={<span>Loading...</span>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default App
