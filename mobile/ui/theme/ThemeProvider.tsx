import { FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { Appearance, Platform, StatusBar } from 'react-native'
import { useTheme } from 'styled-components'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native'

import { theme } from './theme'
import { ThemeModes } from './types'

type ThemeProviderProps = {
  children: ReactNode | ReactNode[]
  customThemeHandler?: {
    activeTheme: ThemeModes
    setActiveTheme: (theme: ThemeModes) => void
  }
}

export const useAppTheme = () => useTheme()

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  customThemeHandler
}) => {
  const [activeTheme, setActiveTheme] = useState<ThemeModes>('light')
  const systemColorScheme = Appearance.getColorScheme()

  const setThemeMode = useCallback(
    (mode: ThemeModes) => {
      if (customThemeHandler) {
        customThemeHandler.setActiveTheme(mode)
        return
      }
      setActiveTheme(mode)
    },
    [customThemeHandler]
  )

  const mode = useMemo(() => {
    if (customThemeHandler) {
      return customThemeHandler.activeTheme
    }

    return activeTheme
  }, [activeTheme, customThemeHandler])

  const appScheme = useMemo(() => {
    if (mode === 'system') {
      return systemColorScheme || 'light'
    }
    return mode
  }, [mode, systemColorScheme])

  const colors = useMemo(() => {
    return theme.themeColors[appScheme]
  }, [appScheme])

  useEffect(() => {
    Appearance.setColorScheme(appScheme)
  }, [appScheme])

  return (
    <StyledThemeProvider
      theme={{
        ...theme,
        scheme: appScheme,
        mode,
        setThemeMode,
        toggleThemeMode: () => {
          setThemeMode(appScheme === 'light' ? 'dark' : 'light')
        },
        colors
      }}>
      <StatusBar
        barStyle={appScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={Platform.OS === 'android' ? colors.primary : undefined}
      />
      {children}
    </StyledThemeProvider>
  )
}
