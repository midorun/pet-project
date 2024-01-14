import React, { FC, Suspense } from 'react'

import { Stack } from '@mui/joy'
import { Outlet } from 'react-router-dom'

import { useThemeContext } from 'app/providers/ThemeProvider'

import PageLoader from 'widgets/page-loader'
import Sidebar from 'widgets/sidebar'

const App: FC = () => {
  const { theme } = useThemeContext()

  return (
    <Stack direction="row">
      <Sidebar />
      <Stack
        sx={{
          px: 6,
          py: 4,

          width: '100%',
          border: 'none',
        }}
      >
        <main>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </main>

        <footer></footer>
      </Stack>
    </Stack>
  )
}

export default App
