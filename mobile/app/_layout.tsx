import { Stack } from 'expo-router'

import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/useColorScheme'
import { ThemeModes, ThemeProvider, useInitializeAppUi } from '@/ui'

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const { isLoading } = useInitializeAppUi()

  if (isLoading) {
    return null
  }

  return (
    <ThemeProvider
      customThemeHandler={{
        activeTheme: colorScheme as ThemeModes,
        setActiveTheme: () => {}
      }}>
      <Stack>
        {/*<Stack.Screen name="(tabs)" options={{ headerShown: false }} />*/}
        <Stack.Screen
          name="(playground)"
          options={{ headerShown: false, title: 'Ori Pka pka' }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  )
}
