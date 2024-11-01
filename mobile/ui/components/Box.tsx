import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import Reanimated from 'react-native-reanimated'
import styled from 'styled-components/native'

import { BorderWeights, Colors, SpacingTypes } from '../theme'

type BoxProps = {
  bgColor?: Colors | string
  borderSize?: BorderWeights
  borderColor?: Colors
  borderBottomColor?: Colors
  borderRightColor?: Colors
  borderTopColor?: Colors
} & Omit<ViewStyle, 'borderColor'> &
  SpacingTypes

export const Box = styled.View<BoxProps>`
  border-width: ${({ theme, borderSize = 'none' }) => {
    return theme.borderWeights[borderSize]
  }};
  border-top-color: ${({
    theme,
    borderColor = 'transparent',
    borderTopColor
  }) => {
    return theme.colors[borderTopColor || borderColor]
  }};
  border-bottom-color: ${({
    theme,
    borderColor = 'transparent',
    borderBottomColor
  }) => {
    return theme.colors[borderBottomColor || borderColor]
  }};
  border-right-color: ${({
    theme,
    borderRightColor,
    borderColor = 'transparent'
  }) => {
    return theme.colors[borderRightColor || borderColor]
  }};
  border-color: ${({ theme, borderColor = 'transparent' }) => {
    return theme.colors[borderColor || borderColor]
  }};
  flex: ${({ flex = 'none' }) => flex};
  background-color: ${({ theme, bgColor = 'transparent' }) => {
    if (bgColor && theme.colors[bgColor as Colors]) {
      return theme.colors[bgColor as Colors]
    }

    return bgColor ? bgColor : theme.colors.primary
  }};
  padding-vertical: ${({ theme, py = 'none' }) => theme.spacing[py]};
  padding-horizontal: ${({ theme, px = 'none' }) => theme.spacing[px]};
  padding-top: ${({ theme, pt = 'none', py }) => {
    if (py) return theme.spacing[py]
    return theme.spacing[pt]
  }};
  padding-bottom: ${({ theme, pb = 'none', py }) => {
    if (py) return theme.spacing[py]
    return theme.spacing[pb]
  }};
  margin-top: ${({ theme, mt = 'none', my }) => {
    if (my) return theme.spacing[my]

    return theme.spacing[mt]
  }};
  margin-bottom: ${({ theme, mb = 'none', my }) => {
    if (my) return theme.spacing[my]

    return theme.spacing[mb]
  }};
  margin-right: ${({ theme, mr = 'none', my }) => {
    if (mr) return theme.spacing[mr]

    return theme.spacing[mr]
  }};
  margin-left: ${({ theme, ml = 'none', my }) => {
    if (ml) return theme.spacing[ml]

    return theme.spacing[ml]
  }};
`

export const AnimatedBox = Reanimated.createAnimatedComponent(Box)
