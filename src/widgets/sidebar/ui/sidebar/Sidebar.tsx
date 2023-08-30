import React, { FC } from 'react'

import Navbar from 'widgets/navbar'

import { LangSwitch } from 'features/lang-switch'
import { ThemeSwitch } from 'features/theme-switch'

import cn from 'shared/lib/cn'
import useBooleanState from 'shared/lib/hooks/useBooleanState'

import cns from './Sidebar.module.scss'

const Sidebar: FC = () => {
  const [isHovered, setIsHoveredToTrue, setIsHoveredToFalse] = useBooleanState()

  return (
    <aside
      id={'sidebar'}
      data-testid={'sidebar'}
      className={cn(cns.Sidebar)}
      onMouseEnter={setIsHoveredToTrue}
      onMouseLeave={setIsHoveredToFalse}
    >
      <Navbar isHovered={isHovered} />
      <LangSwitch />
      <ThemeSwitch className={cn(cns.themeSwitch)} />
    </aside>
  )
}
export default Sidebar
