import { ThemeValuesEnum, useThemeContext } from 'app/providers/ThemeProvider'
import React from 'react'
import { ThemeDarkIcon, ThemeLightIcon } from 'shared/assets/icons'
import { cn } from 'shared/lib/cn'
import { FC } from 'shared/types'

import cns from 'features/theme-switch/ui/ThemeSwitch.module.scss'

const ThemeSwitch: FC = (props) => {
  const { className } = props

  const { theme, toggleTheme } = useThemeContext()

  return (
    <button
      className={cn(cns.ThemeSwitch, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === ThemeValuesEnum.DARK ? <ThemeDarkIcon /> : <ThemeLightIcon />}
    </button>
  )
}

export default ThemeSwitch
