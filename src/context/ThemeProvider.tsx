import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react'

export enum ThemeValues {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeContextType = {
  theme: ThemeValues
  setTheme: Dispatch<SetStateAction<ThemeValues>>
  toggleTheme: () => void
}

const LSK_THEME = 'theme'

const themeContextDefaultValue =
  (localStorage.getItem(LSK_THEME) as ThemeValues) ?? ThemeValues.LIGHT

const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(themeContextDefaultValue)

  const toggleTheme = () => {
    const newThemeValue =
      theme === ThemeValues.LIGHT ? ThemeValues.DARK : ThemeValues.LIGHT
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
      'useCurrentUser has to be used within <ThemeContext.Provider>'
    )
  }

  return themeContext
}
