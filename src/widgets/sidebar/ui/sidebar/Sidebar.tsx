import React from 'react'

import Navbar from 'widgets/navbar'

import { LangSwitch } from 'features/lang-switch'
import { ThemeSwitch } from 'features/theme-switch'

import { cn } from 'shared/lib/cn'
import { FC } from 'shared/types'

import cns from './Sidebar.module.scss'

const Sidebar: FC = () => {
  return (
    <aside
      data-testid={'sidebar'}
      className={cn(cns.Sidebar)}
    >
      <Navbar />
      <LangSwitch />
      <ThemeSwitch className={cn(cns.themeSwitch)} />
    </aside>
  )
}
export default Sidebar
