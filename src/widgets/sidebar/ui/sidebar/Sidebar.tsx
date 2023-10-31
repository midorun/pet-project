import React, { FC } from 'react'

import Navbar from 'widgets/navbar'

import { LangSwitch } from 'features/lang-switch'
import { ThemeSwitch } from 'features/theme-switch'

import cn from 'shared/lib/cn'

const Sidebar: FC = () => {
  return (
    <aside
      id={'sidebar'}
      data-testid={'sidebar'}
      className={cn(
        'group flex min-h-screen w-sidebar-collapsed flex-col space-y-3 bg-[--inverted-bg-color] px-2 transition-[width] duration-1000 hover:w-sidebar'
      )}
    >
      <Navbar />
      <LangSwitch />
      <ThemeSwitch />
    </aside>
  )
}
export default Sidebar
