import React, { FC } from 'react'

import { Sheet } from '@mui/joy'

import Navbar from 'widgets/navbar'

import { LangSwitch } from 'features/lang-switch'
import { ThemeSwitch } from 'features/theme-switch'

import cn from 'shared/lib/cn'

import Login from './login/Login'

const Sidebar: FC = () => {
  return (
    <Sheet
      variant="outlined"
      sx={{ display: 'flex' }}
    >
      <aside
        id={'sidebar'}
        data-testid={'sidebar'}
        className={cn(
          'group flex min-h-screen w-sidebar-collapsed flex-col space-y-3 bg-[--inverted-bg-color] px-2 transition-[width] duration-1000 hover:w-sidebar'
        )}
      >
        <Navbar />
        <Login />
        <LangSwitch />
        <ThemeSwitch />
      </aside>
    </Sheet>
  )
}
export default Sidebar
