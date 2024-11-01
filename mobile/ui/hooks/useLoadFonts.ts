import {
  useFonts,
  Mulish_500Medium,
  Mulish_800ExtraBold,
  Mulish_600SemiBold,
  Mulish_400Regular
} from '@expo-google-fonts/mulish'

export const useLoadFonts = () => {
  const [isFontsLoaded, fontError] = useFonts({
    Mulish_500Medium,
    Mulish_800ExtraBold,
    Mulish_600SemiBold,
    Mulish_400Regular
  })

  return { isFontsLoaded, fontError }
}
