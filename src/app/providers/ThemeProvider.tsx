import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react'

export enum ThemeValuesEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeContextType = {
  theme: ThemeValuesEnum
  setTheme: Dispatch<SetStateAction<ThemeValuesEnum>>
  toggleTheme: () => void
}

const LSK_THEME = 'theme'

const themeContextDefaultValue =
  (localStorage.getItem(LSK_THEME) as ThemeValuesEnum) ?? ThemeValuesEnum.LIGHT

const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(themeContextDefaultValue)

  const toggleTheme = () => {
    const newThemeValue =
      theme === ThemeValuesEnum.LIGHT
        ? ThemeValuesEnum.DARK
        : ThemeValuesEnum.LIGHT
    setTheme(newThemeValue)
    localStorage.setItem(LSK_THEME, newThemeValue)
  }

  const providerValue = {
    theme,
    setTheme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error(
      'useThemeContext has to be used within <ThemeContext.Provider>'
    )
  }

  return themeContext
}
