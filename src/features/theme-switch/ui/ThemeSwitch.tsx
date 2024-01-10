import React, { FC } from 'react'

import { Button } from '@mui/joy'

import { ThemeValuesEnum, useThemeContext } from 'app/providers/ThemeProvider'

import { ThemeDarkIcon, ThemeLightIcon } from 'shared/assets/icons'
import { PropsWithClassName } from 'shared/model/types'

const ThemeSwitch: FC<PropsWithClassName> = (props) => {
  const { className } = props

  const { theme, toggleTheme } = useThemeContext()

  return (
    <Button onClick={toggleTheme}>
      {theme === ThemeValuesEnum.DARK ? <ThemeDarkIcon /> : <ThemeLightIcon />}
    </Button>
  )
}

export default ThemeSwitch
