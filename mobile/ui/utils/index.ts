import * as Haptics from 'expo-haptics'
import { ImpactFeedbackStyle } from 'expo-haptics/src/Haptics.types'

export const haptics = (style?: ImpactFeedbackStyle) => {
  Haptics.impactAsync(style ?? ImpactFeedbackStyle.Light).catch(console.error)
}
