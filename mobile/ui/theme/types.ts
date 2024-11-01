import {
  borderRadius,
  borderWeights,
  colorsLight,
  spacing,
  typography
} from './index'

export type Typography = keyof typeof typography
export type Spacing = keyof typeof spacing
export type Colors = keyof typeof colorsLight
export type BorderWeights = keyof typeof borderWeights
export type BorderRadius = keyof typeof borderRadius
export type ThemeModes = 'system' | 'light' | 'dark'
export type SpacingTypes = {
  py?: Spacing
  px?: Spacing
  pt?: Spacing
  pb?: Spacing
  pr?: Spacing
  pl?: Spacing
  my?: Spacing
  mx?: Spacing
  mb?: Spacing
  mt?: Spacing
  mr?: Spacing
  ml?: Spacing
}
