import { useMemo } from 'react'

import { useLoadFonts } from './useLoadFonts'

export const useInitializeAppUi = () => {
  const { isFontsLoaded, fontError } = useLoadFonts()

  const isLoading = useMemo(() => {
    // Add other loading states here
    return !isFontsLoaded
  }, [isFontsLoaded])

  const hasError = useMemo(() => {
    // Add other error states here
    return fontError
  }, [fontError])

  if (hasError) {
    throw hasError
  }

  return { isLoading, hasError }
}
