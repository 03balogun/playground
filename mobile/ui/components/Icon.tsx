import { Camera, LucideProps } from 'lucide-react-native'
import React from 'react'

import { Colors, useAppTheme } from '../theme'

const icons = {
  Camera
}

export type IconName = keyof typeof icons

type IconProps = LucideProps & {
  name: IconName
  icon?: IconName
  color?: Colors | string
}

export const Icon = React.forwardRef(({ color, ...props }: IconProps, _) => {
  const theme = useAppTheme()
  const Icon = icons[props.name || props.icon]

  if (!Icon) {
    console.warn(
      `Icon ${props.name} not found, make sure it's added to the icons object in src/app-ui/components/Icon.tsx. See https://lucide.dev/icons for a list of available icons.`
    )
    return null
  }

  let derivedColor = theme.colors.secondary

  if (color) {
    if (theme.colors?.[color]) {
      derivedColor = theme.colors?.[color]
    } else {
      derivedColor = color
    }
  }

  return (
    <Icon
      strokeWidth={2}
      {...props}
      color={derivedColor}
      absoluteStrokeWidth={true}
    />
  )
})
