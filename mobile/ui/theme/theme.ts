import { ThemeModes } from './index'

export const colorsLight = {
  transparent: 'transparent',
  white: '#FFF',
  primary: '#FFF',
  baseLayer: '#FFF',
  secondary: '#0D0E0F',
  secondaryAlt: '#333333',
  light: '#F1F1FA',
  tertiary: '#91919F',
  tertiaryAlt: '#79757c',
  red: '#D81616',
  green: '#4A6C12',
  greenAlt: '#97da2e',
  blue: '#007aff',
  warn: '#e8ab08',
  borderColor: '#F1F1FA',
  borderColorLight: '#D9D9D9',
  layer: '#f6f6f7',
  layerBg: '#1A1A1A',
  layerBgAlt: '#333333',
  miscColor1: '#ffafcc',
  miscColor2: '#d4e7f7',
  miscColor3: '#f7e9d4',
  miscColor4: '#ccd5ae',
  miscColor5: '#faedcd',
  miscColor6: '#e9edc9',
  miscColor7: '#ffc8dd',
  miscColor8: '#cdb4db',
  miscColor9: '#a2d2ff',
  miscColor10: '#e3d5ca',
  miscColor11: '#f7d4d8',
  miscColor12: '#d6ccc2'
}

const colorsDark = {
  ...colorsLight,
  baseLayer: '#0D0E0F',
  secondary: '#FFF',
  layer: '#1b1b1f',
  borderColor: '#2e2e32',
  primary: '#161618',
  secondaryAlt: '#e1e1e1'
}

export const themeColors = {
  light: colorsLight,
  dark: colorsDark
}

const fonts = {
  regular: 'Mulish_400Regular',
  extraBold: 'Mulish_800ExtraBold',
  semiBold: 'Mulish_600SemiBold',
  medium: 'Mulish_500Medium'
}

export const borderWeights = {
  none: '0px',
  xs: '0.5px',
  sm: '1px',
  md: '1.5px',
  lg: '2px'
}

export const borderRadius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '16px',
  full: '100px'
}

export const spacing = {
  none: '0px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '64px',
  xxxl: '70px'
}

export const typography = {
  extraBold24: {
    fontFamily: fonts.extraBold,
    fontSize: '24px'
  },
  extraBold18: {
    fontFamily: fonts.extraBold,
    fontSize: '18px'
  },
  extraBold16: {
    fontFamily: fonts.extraBold,
    fontSize: '16px'
  },
  extraBold14: {
    fontFamily: fonts.extraBold,
    fontSize: '14px'
  },
  extraBold10: {
    fontFamily: fonts.extraBold,
    fontSize: '13px'
  },
  semiBold24: {
    fontFamily: fonts.semiBold,
    fontSize: '24px'
  },
  semiBold18: {
    fontFamily: fonts.semiBold,
    fontSize: '18px'
  },
  semiBold16: {
    fontFamily: fonts.semiBold,
    fontSize: '16px'
  },
  semiBold14: {
    fontFamily: fonts.semiBold,
    fontSize: '14px'
  },
  semiBold10: {
    fontFamily: fonts.semiBold,
    fontSize: '10px'
  },
  medium24: {
    fontFamily: fonts.medium,
    fontSize: '24px'
  },
  medium16: {
    fontFamily: fonts.medium,
    fontSize: '16px'
  },
  medium14: {
    fontFamily: fonts.medium,
    fontSize: '14px'
  },
  medium12: {
    fontFamily: fonts.medium,
    fontSize: '12px'
  },
  regular16: {
    fontFamily: fonts.regular,
    fontSize: '16px'
  },
  regular14: {
    fontFamily: fonts.regular,
    fontSize: '14px'
  },
  regular10: {
    fontFamily: fonts.regular,
    fontSize: '10px'
  }
}

export const theme = {
  themeColors,
  colors: themeColors['light'],
  fonts,
  typography,
  spacing,
  borderWeights,
  borderRadius
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    themeColors: typeof themeColors
    colors: typeof themeColors.light
    fonts: typeof fonts
    spacing: typeof spacing
    borderRadius: typeof borderRadius
    borderWeights: typeof borderWeights
    typography: typeof typography
    mode: ThemeModes
    scheme: Omit<ThemeModes, 'system'>
    setThemeMode: (mode: ThemeModes) => void
    toggleThemeMode: () => void
  }
}
