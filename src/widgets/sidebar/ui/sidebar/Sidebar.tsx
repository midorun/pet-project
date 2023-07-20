import React, { FC, useState } from 'react'

import Navbar from 'widgets/navbar'

import { LangSwitch } from 'features/lang-switch'
import { ThemeSwitch } from 'features/theme-switch'

import { cn } from 'shared/lib/cn'

import cns from './Sidebar.module.scss'

const Sidebar: FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <aside
      id={'sidebar'}
      data-testid={'sidebar'}
      className={cn(cns.Sidebar)}
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
    >
      <Navbar isHovered={isHovered} />
      <LangSwitch />
      <ThemeSwitch className={cn(cns.themeSwitch)} />
    </aside>
  )
}
export default Sidebar
