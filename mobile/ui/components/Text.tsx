import Reanimated from 'react-native-reanimated'
import styled from 'styled-components/native'

import { Colors, SpacingTypes, Typography } from '../theme'

export const Text = styled.Text<
  {
    type?: Typography
    color?: string | Colors
    underline?: boolean
    capitalize?: boolean
    align?: 'left' | 'right' | 'center' | 'justify'
  } & SpacingTypes
>`
  text-align: ${({ align = 'left' }) => align};
  text-transform: ${({ capitalize = false }) =>
    capitalize ? 'capitalize' : 'none'};
  text-decoration-line: ${({ underline = false }) =>
    underline ? 'underline' : 'none'};
  color: ${({ theme, color = 'secondary' }) => {
    if (color && !theme.colors?.[color as Colors]) return color

    return theme.colors[color as Colors]
  }};
  font-family: ${({ theme, type = 'regular14' }) =>
    theme.typography[type].fontFamily};
  font-size: ${({ theme, type = 'regular14' }) =>
    theme.typography[type].fontSize};
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

export const AnimatedText = Reanimated.createAnimatedComponent(Text)
