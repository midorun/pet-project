import React, { FC, Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'

import '../../index.scss'

const App: FC = (props) => {
  const {} = props

  return (
    <div className={'app'}>
      <Link to={'/home'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<span>Loading...</span>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default App
