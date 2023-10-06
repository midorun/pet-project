import React, { FC } from 'react'

import Navbar from 'widgets/navbar'

import { LangSwitch } from 'features/lang-switch'
import { ThemeSwitch } from 'features/theme-switch'

import cn from 'shared/lib/cn'

import cns from './Sidebar.module.scss'

const Sidebar: FC = () => {
  return (
    <aside
      id={'sidebar'}
      data-testid={'sidebar'}
      className={cn(cns.Sidebar, {}, ['Sidebar'])}
    >
      <Navbar />
      <LangSwitch />
      <ThemeSwitch className={cn(cns.themeSwitch)} />
    </aside>
  )
}
export default Sidebar
