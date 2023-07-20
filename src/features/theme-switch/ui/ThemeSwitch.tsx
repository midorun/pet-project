import React, { FC } from 'react'

import { ThemeValuesEnum, useThemeContext } from 'app/providers/ThemeProvider'

import { ThemeDarkIcon, ThemeLightIcon } from 'shared/assets/icons'
import cn from 'shared/lib/cn'
import { PropsWithClassName, UIVariantEnum } from 'shared/types'
import Button from 'shared/ui/button/Button'

import cns from './ThemeSwitch.module.scss'

const ThemeSwitch: FC<PropsWithClassName> = (props) => {
  const { className } = props

  const { theme, toggleTheme } = useThemeContext()

  return (
    <Button
      variant={UIVariantEnum.SECONDARY}
      className={cn(cns.ThemeSwitch, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === ThemeValuesEnum.DARK ? <ThemeDarkIcon /> : <ThemeLightIcon />}
    </Button>
  )
}

export default ThemeSwitch
