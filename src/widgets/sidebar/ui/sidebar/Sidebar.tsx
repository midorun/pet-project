import React, { FC } from 'react'

import Navbar from 'widgets/navbar'

import { LangSwitch } from 'features/lang-switch'
import { ThemeSwitch } from 'features/theme-switch'

import cn from 'shared/lib/cn'
import useToggleState from 'shared/lib/hooks/useToggleState'

import cns from './Sidebar.module.scss'

const Sidebar: FC = () => {
  const [isHovered, setIsHoveredToTrue, setIsHoveredToFalse] = useToggleState()

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
