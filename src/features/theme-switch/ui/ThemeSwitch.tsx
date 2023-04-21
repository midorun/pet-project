import React from 'react'

import { ThemeValuesEnum, useThemeContext } from 'app/providers/ThemeProvider'

import { ThemeDarkIcon, ThemeLightIcon } from 'shared/assets/icons'
import { cn } from 'shared/lib/cn'
import { FC, UIVariantEnum } from 'shared/types'
import Button from 'shared/ui/button/Button'

import cns from './ThemeSwitch.module.scss'

const ThemeSwitch: FC = (props) => {
  const { className } = props

  const { theme, toggleTheme } = useThemeContext()

  return (
    <Button
      variant={UIVariantEnum.PRIMARY}
      className={cn(cns.ThemeSwitch, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === ThemeValuesEnum.DARK ? <ThemeDarkIcon /> : <ThemeLightIcon />}
    </Button>
  )
}

export default ThemeSwitch
